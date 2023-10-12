Feature: Login Manager Password

@User_id1
Scenario:User_id1
Given url git
Given datalari kullanarak sayfaya gir
|username|password|
|istanbul@evim.com|12345 |
Given login butonuna tikla
Then sayfaya girdigini onayla

@User_id2 @smoke
Scenario: User_id2
Given url git
Given datalari kullanarak sayfaya gir
|username|password|
|cypress@a.com|12345 |
Given login butonuna tikla
Then sayfaya girdigini onayla