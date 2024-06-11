<?php

namespace App\Http\Controllers;


use App\Models\Activity;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;

class ActivityController extends Controller
{
    public function index()
    {
        $activity=Activity::all();
        return response()->json($activity);
    }
    public function cekLogin(Request $request){
        $rules = [
            'password' => 'required',
        ];
        $validator = Validator::make($request->all(), $rules);

        if($validator->fails()){
            return response()->json([
                'errors' => $validator->errors()
            ], 404);
        }
        $user = User::where('password',$request->password)->first();
        if(!$user){
            return response()->json([
                'message' => 'Acces denied',
            ]);
        }
        $activity = Activity::create([
            'user_id' => $user->id,
            'jam' => Carbon::now(), 
            'tanggal' => Carbon::now(),
            // 'foto' =>,
        ]);
        return response()->json([
            'message' => 'Access granted',
            'data' => $activity,
        ], 200); 
    }
    public function image(Request $request){
        $activity = Activity::orderBy('created_at','desc')->first();

        if(!$history){
            return response()->json([
                'message' => 'History not found',
            ],404);
        }
        $rules = [
            'foto_name' => 'required|string',
            'foto_file' => 'required|string',
        ];
        $validator = Validator::make($request->all(), $rules);

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors()
            ], 404);
        }

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
