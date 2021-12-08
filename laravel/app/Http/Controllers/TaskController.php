<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTaskRequest;
use App\Http\Requests\UpdateTaskRequest;
use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // return Task::all();
        // abort(500);
        return Task::orderByDesc("id")->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreTaskRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreTaskRequest $request)
    {
        $task = Task::create($request->all());
        return $task;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function show(Task $task)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateTaskRequest  $request
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateTaskRequest $request, Task $task)
    {
        // $task にはデータが既に入っている
        $task->title = $request->title;
        $task->updated_at = now();
        // 上記で代入しただけなので保存する必要がある

        // save メソッドを使用する
        // 返り値は更新したデータが表示される
        $task->save();
        return $task;
        
        // update メソッドを使用する
        // 返り値は成功すると 1 を返す
        // return $task->update();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function destroy(Task $task)
    {
        // delete メソッドを使用する
        // 返り値は成功すると 1 を返す
        $task->delete();
        return $task;
    }

    public function updateDone($id)
    {
        $task = Task::find($id);

        $task->is_done = !$task->is_done;
        $task->updated_at = now();

        $task->save();
        return $task;
    }
}
