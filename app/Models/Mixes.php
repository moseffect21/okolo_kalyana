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
