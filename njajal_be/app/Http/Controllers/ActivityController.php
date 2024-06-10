<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ActivityController extends Controller
{
    public function index()
    {
        $activity=Activity::all();
        return response()->json($activity);
    }

    public function store(Request $request)
    {
        $activity = Activity::create($request->all());
        return response()->json($activity, 201);
    }

    public function show($id)
    {
        return Activity::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $activity = Activity::findOrFail($id);
        $activity->update($request->all());
        return response()->json($activity, 200);
    }

    public function destroy($id)
    {
        Activity::destroy($id);
        return response()->json(null, 204);
    }
}
