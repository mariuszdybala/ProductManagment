/**
 * Created by Mariusz on 02.12.2015.
 */
(function(){

    angular.module("commonServices").factory("productResource", ["$resource",productResource ]);

    function productResource($resource){
        return $resource("/api/products/:productId")
    }

})();

