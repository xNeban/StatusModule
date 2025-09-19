<?php

Route::group(['middleware' => 'web', 'prefix' => 'statusiconsmodule', 'namespace' => 'Modules\StatusIconsModule\Http\Controllers'], function()
{
    Route::get('/', ['uses' => 'StatusIconsModuleController@index', 'laroute' => true])->name('statusiconsmodule_index');
});
