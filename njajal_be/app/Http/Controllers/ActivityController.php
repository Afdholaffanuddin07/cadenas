<?php

namespace App\Http\Controllers;


use App\Models\Activity;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;


class ActivityController extends Controller
{
    public function index()
    {
        $activity=Activity::all();
        return response()->json($activity);
    }
    public function indexall(Request $request){
        $page = $request->input('page',1);
        $perPage = $request->input('per_page',4);
        $activity = Activity::query();
        $activity = $activity->orderBy('created_at','desc');
        $activity = $activity->paginate($perPage,['*'],'page',$page);
        return response()->json($activity);
    }
    public function cekLogin(Request $request){
        date_default_timezone_set('Asia/Jakarta');
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
            ],404);
        }
        $activity = Activity::create([
            'user_id' => $user->id,
            'jam' => Carbon::now()->format('H:i:s'),  // Format jam sekarang menjadi jam:menit:detik
            'tanggal' => Carbon::now()->format('d-m-Y'),

            // 'foto' =>,
        ]);
        return response()->json([
            'message' => 'Access granted',
            'data' => $activity,
        ], 200); 
    }
    public function image(Request $request){
        $activity = Activity::orderBy('created_at','desc')->first();

        if(!$activity){
            return response()->json([
                'message' => 'activity not found',
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
        $fotoData = base64_decode($request->foto_file);
        $fotoName = $request->foto_name . '.jpg';

        $path = $fotoName;
        Storage::disk('public/foto/')->put($path, $fotoData);

        $activity->update([
            'foto' => $path,
        ]);
        return response()->json([
            'message' => 'Activity updated seccessfully',
            'data' => $activity,
        ],200);

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
