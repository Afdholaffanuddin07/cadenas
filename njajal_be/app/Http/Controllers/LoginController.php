<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash; // Import kelas Hash
use App\Models\Admin;

class LoginController extends Controller
{
    public function index()
    {
        $admin = Admin::all();
        return response()->json($admin);
    }

    public function __invoke(Request $request)
    {
        // Validasi input
        $validator = Validator::make($request->all(), [
            'admin'     => 'required',
            'passadmin' => 'required'
        ]);
    
        // Jika validasi gagal, kembalikan respon 422 (Unprocessable Entity)
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }
    
        // Ambil data admin dari database berdasarkan input admin
        $admin = Admin::where('admin', $request->admin)->first();
    
        // Jika tidak ada admin atau password dengan nama admin yang diberikan
        if (!$admin || !Hash::check($request->passadmin,$admin->passadmin)) {
            return response()->json([
                'success' => false,
                'message' => 'username atau password tidak cocok'
            ], 404);
        }
    
       return response()->json([
            'success' => true,
            'user'    => $admin,
            ], 200);
    }
}