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
            <th>Average PSAT</th>
            <th>Average ACT</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>2015</td>
            <td>Broughan</td>
            <td>1969</td>
            <td>Black</td>
        </tr>
        <tr>
            <td>2016</td>
            <td>1232</td>
            <td>1997</td>
            <td>Green</td>
        </tr>
        <tr>
            <td>2017</td>
            <td>Excursion</td>
            <td>2003</td>
            <td>Green</td>
        </tr>
        <tr>
            <td>2018</td>
            <td>Ranger</td>
            <td>2012</td>
            <td>Red</td>
        </tr>
        <tr>
            <td>2019</td>
            <td>L3301 Tractor</td>
            <td>2015</td>
            <td>Orange</td>
        </tr>
        <tr>
            <td>2020</td>
            <td>Fusion Energi</td>
            <td>2015</td>
            <td>Guard</td>
        </tr>
        <tr>
            <td>2021</td>
            <td>XL</td>
            <td>2006</td>
            <td>Grey</td>
        </tr>
        <tr>
            <td>2022</td>
            <td>F150 Lightning</td>
            <td>2024</td>
            <td>Guard</td>
        </tr>
    </tbody>
</table>

</body>

<!-- Script is used to embed executable code -->
<script>
    $("#xdemo").DataTable();
</script>
