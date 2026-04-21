<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
 xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">

<html>
<head>
    <title>Book Details</title>

    <style>
        table {
            border-collapse: collapse;
            width: 60%;
        }
        th, td {
            border: 1px solid black;
            padding: 8px;
            text-align: center;
        }
        th {
            background-color: #dddddd;
        }
    </style>

</head>

<body>

<h2 align="center">Book Information</h2>

<table align="center">
<tr>
    <th>Title</th>
    <th>Author</th>
    <th>Price</th>
</tr>

<xsl:for-each select="books/book">
<tr>
    <td><xsl:value-of select="title"/></td>
    <td><xsl:value-of select="author"/></td>
    <td><xsl:value-of select="price"/></td>
</tr>
</xsl:for-each>

</table>

</body>
</html>

</xsl:template>
</xsl:stylesheet>