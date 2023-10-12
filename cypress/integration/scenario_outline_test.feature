Feature: Capitals
Scenario Outline: Capitals search
Given url git
Given arama yapilacak "<world capitals>"
Given arama yapildigini kontrol et "<world capitals>"

Examples:
 | world capitals | 
 | London |  
 | Madrid |
 | Paris |
 | istanbul |
