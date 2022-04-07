<!DOCTYPE html>
<html>

<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>randomiz Number</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' media='screen' href='main.css'>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
        crossorigin="anonymous"></script>
</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col-lg">
                <h1>Random Number</h1>
                <form action="" method="GET">
                    <div class="form-group">
                        <div>
                            <label for="nbrMax">Nombre Maximum : </label>
                            <input type="number" class="form-control" value="10" id="nbrMax" />
                        </div>
                        <div>
                            <label for="nbrMin">Nombre Minimum : </label>
                            <input type="number" class="form-control" id="nbrMin" value="1" />
                        </div>
                        <div>
                            <label for="nbrDraw">Nombre de tirage : </label>
                            <input type="number" class="form-control" id="nbrDraw" value="1" min="1" />
                        </div>
                        <div>
                            <input type="button" class="btn btn-primary" id="randomizThis" value="Randomize this"
                                onclick="nbrRandom()" />
                        </div>
                    </div>
                </form>
                <table id="numberz"></table>
                <div id="alert"></div>
                
            </div>
            <div class="col-lg">
                <h1>Pile Ou Face</h1>
                <input type="button" class="btn btn-primary" id="pileFace" value="Lancer une pièce"
                    onclick="pileFace()" />
                <h2 id="PileFace"></h2>
                <div id='piece' class="center"></div>
            </div>
        </div>

</body>

<script src="script.js"></script>

</html>