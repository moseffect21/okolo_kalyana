<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Tobacco;
use App\Models\Bowls;
use Illuminate\Http\Request;

class Mixes extends Model
{
    use HasFactory;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'photo',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'updated_at',
        'created_at',
    ];

    public function getAll() {
        $tobacco = Tobacco::get()->all();
        $bowls = Bowls::get()->all();
        return response()->json([
            'tobacco' => $tobacco,
            'bowls' => $bowls,
        ], 200);
    }

    public function getVariants(Request $request) {
        $tobacco_id = $request->input('tobacco_id');
        $bowl_id = $request->input('bowl_id');
        if (empty($tobacco_id) && empty($bowl_id)) {
            return response(['error'=>[
                'detail' => 'Не передан ни один параметр (bowl_id или tobacco_id)',
            ]]);
        }
        if (!empty($bowl_id)) {
            $variants = Mixes::where('bowl_id', $bowl_id)->get()->map(function ($m){
                return Tobacco::where('id', $m->tobacco_id)->first();
            });
            $bowls = Bowls::get()->all();
            return response()->json([
                'tobacco' => $variants,
                'bowls' => $bowls,
            ], 200);
        }
        if (!empty($tobacco_id)) {
            $variants = Mixes::where('tobacco_id', $tobacco_id)->get()->map(function ($m){
                return Bowls::where('id', $m->bowl_id)->first();
            });
            $tobacco = Tobacco::get()->all();
            return response()->json([
                'tobacco' => $tobacco,
                'bowls' => $variants,
            ], 200);
        }
    }

    public function getMixes(Request $request) {
        $tobacco_id = $request->input('tobacco_id');
        $bowl_id = $request->input('bowl_id');
        if (empty($tobacco_id) && empty($bowl_id)) {
            return response(['error'=>[
                'detail' => 'Не передан ни один параметр (bowl_id или tobacco_id)',
            ]]);
        }
        if (!empty($bowl_id)) {
            $bowl = Bowls::where('id', $bowl_id)->first();
            $variants = Mixes::where('bowl_id', $bowl_id)->get()->map(function ($m){
                $t = Tobacco::where('id', $m->tobacco_id)->first();
                $t->youtube_links = $m->links;
                return $t;
            });
            $bowl->variants = $variants;

            return response()->json($bowl, 200);
        }
        if (!empty($tobacco_id)) {
            $tobacco = Tobacco::where('id', $tobacco_id)->first();
            $variants = Mixes::where('tobacco_id', $tobacco_id)->get()->map(function ($m){
                $b = Bowls::where('id', $m->bowl_id)->first();
                $b->youtube_links = $m->links;
                return $b;
            });
            $tobacco->variants = $variants;
            return response()->json($tobacco, 200);
        }
    }

    public function getMix(Request $request) {
        $tobacco_id = $request->input('tobacco_id');
        $bowl_id = $request->input('bowl_id');
        if (empty($tobacco_id) || empty($bowl_id)) {
            return response(['error'=>[
                'detail' => 'Не задан tobacco_id или bowl_id',
            ]]);
        }

        $mix = Mixes::where('tobacco_id',$tobacco_id)->where('bowl_id',$bowl_id)->first();
        if (empty($mix)){
            return response(['error'=>[
                'detail' => 'Такая забивка не найдена',
            ]]);
        }
        $tobacco = Tobacco::where('id', $tobacco_id)->first();
        $bowl = Bowls::where('id', $bowl_id)->first();

        $mix->links = str_replace(array("\r\n", "\r", "\n", "\t", '  ', '    ', '    '), '', $mix->links);
        $mix->links = explode(',', $mix->links);
        $mix['tobacco'] = $tobacco;
        $mix['bowl'] = $bowl;

        return response()->json($mix, 200);
    }
}
