<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>


        <div data-loop="yes" data-route="data.json" data-method="post" data-request="{}">
            <div class="data-container">
                <div data-template="yes" style="display: none">
                    Welcome {{name}}
                </div>
            </div>

            <div data-loading-image style="display: none">
                <img src="hex-loader2.gif" alt="loading"/>
            </div>

            <button data-load-more="yes">Load More</button>
        </div>

        <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
        <script src="mootemplate.js"></script>
    </body>
</html>
