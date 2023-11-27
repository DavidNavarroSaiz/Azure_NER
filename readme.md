
## Node.js NER Demo

Implements Named Entity Recognition (NER) using Azure services in a Node.js environment.

Demonstrates speech recognition analytics using Azure Language services `PiiEntityRecognition` asynchronously in a Node.js environment and also in a python environment.
### node js:
create a .env file and paste this:
```
AZURE_LANGUAGE_ENDPOINT = ""
AZURE_LANGUAGE_KEY = ""

write the API Key obtained when the Azure service is already configured.

```

to run it run in a terminal:
`node install`

to run the file do:

`node NER_analysis.js`

it performs NER analytics in a text that is in the same script in the varialbe `Documents` 


### Python 

run in the temrinal:
`pip install -r requirements.txt`

and then tun the command:

`python text_analysis.py`

it performs NER analytics in a text that is in the same script in the variable `Text` 
