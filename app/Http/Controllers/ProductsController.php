<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\products;
use App\Models\product_categories;


class ProductsController extends Controller
{
    //Получение всех категорий магазина
    public function getShopCategories(Request $request)
    {
        $categories = product_categories::get();
        return response()->json($categories, 200);
    }

    // Получение продукта по id или slug
    public function getProduct(Request $request, $id)
    {
        $product = products::where('id', $id)
            ->orWhere('slug', $id)
            ->with(['comments', 'images'])
            ->get();
        return response()->json($product, 200);
    }

    /*
        Получение категории и ее продуктов с пагинацией

        Принимаемые параметры в запросе:
        page - номер страницы
        per_page - кол-во на каждой странице
    */
    public function getProductsCategory(Request $request, $id)
    {
        $perPage = $request->has('per_page') ? intval($request->query('per_page')) : 15;

        $productsCategory = product_categories::where('id', $id)->orWhere('slug', $id)->first();
        $products = $productsCategory->products()->paginate($perPage);
        $productsCategory->products = $products;
        
        return response()->json($productsCategory, 200);
    }
    
    /*
        Запрос на получение списка продуктов

        Принимаемые параметры в запросе:
        page - номер страницы
        per_page - кол-во на каждой странице
    */
    public function getProducts(Request $request)
    {
        $perPage = $request->has('per_page') ? intval($request->query('per_page')) : 15;

        $products = products::with('images')->get();
        return response()->json($products, 200)->paginate($perPage);
    }
}
