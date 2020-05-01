# Zero Server Geo API

Can be used to return geographical data based on country / state / city / zip. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them

```
npm install -g zero
```

### Installing

A step by step series of examples that tell you how to get a development env running

After installing zero npm globally. Run the following command:

```
npm run dev
```

With the server running locally, the following endpoints will be accessible:

| Endpoint  | Data Returned |
| ------------- | ------------- |
| /api/countries  | List of countries.  |
| /api/countries?id={id}  | Country containing the id of the parameter.  |
| /api/countries?code={code} | Country containing the sortname of the code parameter. |
| /api/states?state={country_id} | States containing the country_id of the parameter. |
| /api/states?id={id} | State containing the id of the parameter. |
| /api/cities?id={id} | City containing the id of the parameter. |
| /api/cities?state={state id} | Cities containing the state id of the parameter. |
| /api/zips/{stateAbbreviation}/{city} | Zips that exist in the state/city. |
| /api/zips/{stateAbbreviation}/{city}?radius={number} | Zips that exist within a given radius to the state/city. |
| /api/zips/verify/{zip} | Verifies the zip is valid and returns data associated with the zip |
| /api/zips/verify/{zip}?radius={number} | Verifies the zip is valid and returns data associated with the zip |


## Deployment
https://zeroserver.io/docs/deploying

## Built With

* [Zero Server](https://zeroserver.io/docs) - The web framework used.
* [Countries-States-Cities-database](https://github.com/hiiamrohit/Countries-States-Cities-database) - The data used.
