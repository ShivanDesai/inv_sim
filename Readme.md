# Invoice Simplifier
Invoice simplifier is a productivity application that tracks and analyses your expenses using invoice photos, thus eliminating the need for you to spend hours managing your expenses and budget.

# Abstract
In today’s scenario, where time is of prime importance, decoding a complex invoice and reconciliation can be tedious and time consuming. In addition, in this cumbersome process, missing crucial details and spotting errors in the invoice can be an added overhead. To take care of all these day to day issues Invoice-Simplifier extracts key elements from your invoices, and gives you a simplified and informative summary, while also analysing and categorizing the different products / services that drain your wallet the most. Pie charts and graphs has been included as an added advantage to get a better visual understanding of the expenditures. Our application plans to reduce all the overheads from the users’ perspective and make invoice analysis a seamless experience. 

# Technology Stack
1. React for front end desing
2. Node for backend
3. Python for data processing. Libraries used:
    * Numpy, pillow and openCV image upscaling and segmentation.
    * Pytesseract for OCR.
    * Spacy / NLTK for named entity recognition and catagorization.
    * Numpy and pandas for processing of extracted data.
    
###### Original Professor Feedback :-
Name entity recognition using OCR from a invoice

Develop a service that takes invoices as input and generates a csv with important name and entities which can be ingested into a database. The end to end flow will show the extracted data which user will acknowledge before it gets ingested into db.

use state of the art OCR and language model to build this. take a couple of invoices as examples ..
