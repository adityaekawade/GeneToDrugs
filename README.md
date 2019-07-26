## GeneToDrugs

This is a node.js wrapper for DGIdb (Drug-Gene interaction database) API.


Example endpoint: 
`/genetodrugs/?name=egr2&fda_approved_drug=false` 


Parameters: 
`name` (gene name) - String.  
Example: `name=egr2`


`fda_approved_drug` - Boolean. 
Example: `fda_approved_drug=false`
 
 
Example response: 
``` javascript 
{
  "matchedTerms": 
	[
		{
			"searchTerm": "EGR2",
			"geneName": "EGR2",
			"geneLongName": "EARLY GROWTH RESPONSE 2",
			"entrezId": 1959,
			"geneCategories": [
				{
					"id": "ecf1e11d8dcc4708a81f92bc514dafd1",
					"name": "TRANSCRIPTION FACTOR BINDING"
				}
			],
		  "interactions": [{
			  "interactionId": "3d07a4bd-fccc-49da-912f-c98f354d0f6a",
			  "interactionTypes": [],
			  "drugName": "TRETINOIN",
			  "drugChemblId": "CHEMBL38",
			  "sources": ["NCI"],
			  "pmids": [1361214],
			  "score": 2
			  }]
			}
		  ],
	  "ambiguousTerms": [],
	  "unmatchedTerms": []
 }
```
