---
layout: post
title: US Standardized Test Data
description: JS Standardized Test info table for every year
toc: true
comments: false
categories: [5.A, C4.1]
courses: { compsci: {week: 3}}
type: hacks
catagories: [(4.1)]
---


<head>
    <!-- load jQuery and DataTables output style and scripts -->
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.13.4/css/jquery.dataTables.min.css">
    <script type="text/javascript" language="javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>var define = null;</script>
    <script type="text/javascript" language="javascript" src="https://cdn.datatables.net/1.13.4/js/jquery.dataTables.min.js"></script>
</head>

<!-- Body contains the contents of the Document -->
<body>
    <table id="Standardized Tests" class="table">
    <thead>
        <tr>
            <th>Year</th>
            <th>Average SAT</th>
            <th>Average ACT</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>2017</td>
            <td>1060</td>
            <td>21.0</td>
        </tr>
        <tr>
            <td>2018</td>
            <td>1068</td>
            <td>20.8</td>
        </tr>
        <tr>
            <td>2019</td>
            <td>1059</td>
            <td>20.7</td>
        </tr>
        <tr>
            <td>2020</td>
            <td>1051</td>
            <td>20.6</td>
        </tr>
        <tr>
            <td>2021</td>
            <td>1060</td>
            <td>20.3</td>
        </tr>
        <tr>
            <td>2022</td>
            <td>1050</td>
            <td>19.8</td>
        </tr>
    </tbody>
</table>

</body>

<!-- Script is used to embed executable code -->
<script>
    $("#xdemo").DataTable();
</script>
