# .ethereum Name Service
This document will help you incorporate .ethereum into your projects.



### Requirements
>If you are not actively using it in your project, you should install web3.js.

**NODE**
```
npm install web3
```

**YARN**
```
yarn add web3
```

**In the Browser**
```javascript
<script src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js"></script>
```
or
```javascript
<script src="https://unpkg.com/web3@latest/dist/web3.min.js"></script>
```

### Installation

**NODE**
``` 
npm install eth-name-domains
```

### Usage
Intitialize the libraries.

```javascript
const web3 = new Web3(Web3.givenProvider)
// First create a web3js provider

const ethName = new EthName(web3)
// You are now ready for .ethereum
```

**Primary Address**

Returns the primary name registered to this address.
```javascript
ethName.primaryAddress("ETH_ADDRESS")
.then(function(result){
    console.log(result)
    // Returns the primary  registered to this address.
})
```

**Resolve Address**

Returns the resolved ethereum address of the .ethereum name.
```javascript
ethName.resolveAddress("wagmi.ethereum").then(function(result){
    console.log(result)
    // Returns the resolved ethereum address of the .ethereum name.
})
```

**Address Owners**

Returns the domains owned by an address.
```javascript
ethName.addressOwners("ETH_ADDRESS").then(function(resultOwners) {
	console.log(resultOwners)	
})
```

**Subdomain Status**

This query returns whether the subdomain sale is active.
```javascript
ethName.subdomainPublicSale("name").then(function(result) {
    if (result) {
        //Subdomain can be registered.
    } else {
        //Subdomain can't be registered.
    }
})
```    

**Subdomain Cost**

This query returns the cost of subdomain sales.
```javascript
ethName.subdomainPublicSale("name").then(function(result_cost) {
    console.log(result_cost)
})    
```    

**Last registered names**

Returns the last  registered .ethereum names
```javascript
ethName.lastAddresses(10).then(function(result){
    console.log(result)
    //Returns the last 10 registered .ethereum name
})
```

**Is this domain name taken ?**

Returns whether a domain name has been registered by another user.
```javascript
ethName.isTaken("name").then(function(resultTaken){
    if (resultTaken>0) {
        //This domain name has been registered.
    } 
})
```


**Get Data**

Get domain name information.
```javascript
ethName.getUserData("name","data_name").then(function(result){ {
    console.log(result)
});
```


**Get Twitter Account**

Get Twitter account from .ethereum name.
```javascript
ethName.getTwitter(name).then(function(account_twitter){
     console.log(account_twitter)
})
```


**Get Instagram Account**

Get Instagram account from .ethereum name.
```javascript
ethName.getInstragram(name).then(function(account_instagram){
     console.log(account_instagram)
})
```

**Get Discord Account**

Get Discord account from .ethereum name.
```javascript
ethName.getDiscord(name).then(function(account_discord){
     console.log(account_discord)
})
```

**Get Telegram Account**

Get Telegram account from .ethereum name.
```javascript
ethName.getTelegram(name).then(function(account_telegram){
     console.log(account_telegram)
})
```

**Get URL**

Get URL from .ethereum name.
```javascript
ethName.getUrl(name).then(function(account_url){
     console.log(account_url)
})
```

**Get Email**

Get Email from .ethereum name.
```javascript
ethName.getEmail(name).then(function(account_email){
     console.log(account_email)
})
```


**Get About**

Get About from .ethereum name.
```javascript
ethName.getAbout(name).then(function(account_description){
     console.log(account_description)
})
```


**Set New Primary Address**

Changes the primary address.
```javascript
ethName.setPrimaryAddress("name.ethereum","OWNER_ETH_ADDRESS").then(function(result){
    if (result['status']) {
     //Successful
     } else {
     //Failed
     }
})
```

**Set New Resolve Address**

Changes the resolve address.
```javascript
 ethName.setResolveAddress("ether_domain.ethereum","NEW_RESOLVE_ETH_ADDRESS", "OWNER_ETH_ADDRESS").then(function(result){
        if (result['status']) {
        //Successful
        } else {
        //Failed
        }
 })
```

**Register Main Domain**

Registers a new .ethereum address and returns the result.
```javascript
ethName.register("new_domain.ethereum",YOUR_ETH_ADDRESS,YOUR_REFERRAL_ADDRESS,web3.utils.toWei('0.04', 'ether')).then(function(result){
    if (result['status']) {
        // Registration Successful
    } else {
        // Registration Failed
    }
})
```

**Register Subdomain**

Registers a subdomain address and returns the result.
```javascript
 ethName.registerSubdomain("MAIN_DOMAIN_NAME","YOUR_ETH_ADDRESS","NEW_SUBDOMAIN_NAME","COST_WEI").then(function(result){
    if (result['status']) {
        // Registration Successful
    } else {
        // Registration Failed
    }    
})
```


**Start or Close subdomain sale**

```javascript
ethName.setSubdomainSaleActive("true",web3.utils.toWei("0.05",'ether'),"name","OWNER_ETH_ADDRESS").then(function(result){
	if (result['status']) {
     //Successful
     } else {
     //Failed
     }
})
```

**Set Data**

It allows you to add data for the domain name you have.
```javascript
ethName.setUserData("name","data_name","data_value", "Owner_Eth_Address").then(function(result){
    if (result['status']) {
     //Successful
     //eq: data_name: twitter, data_value: twitter_account
     } else {
     //Failed
     }
})
```
