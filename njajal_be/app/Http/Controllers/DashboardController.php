<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Activity;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function getTotalUsers()
    {
        $totalUsers = User::count();
        return response()->json(['total' => $totalUsers]);
    }

    public function getTotalActivities()
    {
        $totalActivities = Activity::count();
        return response()->json(['total' => $totalActivities]);
    }
}
