<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Todo App</title>
</head>
<body>

    <div className="TodoBlock">
        <h1>Todo list</h1>
       <form method="POST" action="/todos">
            @csrf
            <input type="text" name="title">
            <button type="submit">Add</button>
        </form>

        <div class="">
            <h3>John Smith</h3>
            <p>Prepare new Todos</p>
        </div>
    </div>
    @foreach

</body>
</html>
