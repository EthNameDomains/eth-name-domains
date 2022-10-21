const EthName = class {
  constructor(Provider) {
    this.Provider = Provider;
    /* Update when contract live. */
    const abi = [];
    const contractAddress = "";

    this.contract = new Provider.eth.Contract(abi, contractAddress);
  }

  primaryAddress(address) {
    return this.contract.methods
      .primaryAddress(address)
      .call((error, result) => {
        if (error) return error;
        return result;
      });
  }

  addressOwners(address) {
    return this.contract.methods
      .walletOfOwnerName(address)
      .call((error, result) => {
        if (error) return err;
        return result;
      })
      .catch((error) => {
        return error;
      });
  }

  setResolveAddress(name, address, account) {
    return this.contract.methods
      .setAddress(name, address)
      .send({ from: account })
      .then((receipt) => {
        return receipt;
      })
      .catch((error) => {
        return error;
      });
  }

  setPrimaryAddress(name, account) {
    return this.contract.methods
      .setPrimaryAddress(name)
      .send({ from: account })
      .then((receipt) => {
        return receipt;
      })
      .catch((error) => {
        return error;
      });
  }

  setSubdomainSaleActive(active, price, name, account) {
    return this.contract.methods
      .setSubdomainSaleActive(name, active, price)
      .send({ from: account })
      .then((receipt) => {
        return receipt;
      })
      .catch((error) => {
        return error;
      });
  }

  register(name, account, referrer, value) {
    return this.contract.methods
      .register(name, referrer)
      .send({ from: account, value: value })
      .then((receipt) => {
        return receipt;
      })
      .catch(function (error) {
        return error;
      });
  }

  registerAllowlist(name, proof, account, value) {
    return this.contract.methods
      .registerAllowlist(name, proof)
      .send({ from: account, value: value })
      .then((receipt) => {
        return receipt;
      })
      .catch(function (error) {
        return error;
      });
  }

  registerSubdomain(name, subdomain, account, value) {
    return this.contract.methods
      .registerSubdomain(name, subdomain)
      .send({ from: account, value: value })
      .then((receipt) => {
        return receipt;
      })
      .catch(function (error) {
        return error;
      });
  }

  subdomainPublicSale(name) {
    return this.contract.methods
      .subDomains_publicSale(name)
      .call((err, result) => {
        if (err) return err;
        return result;
      })
      .catch(function (error) {
        return error;
      });
  }

  subdomainCost(name) {
    return this.contract.methods
      .subDomains_cost(name)
      .call((err, result) => {
        if (err) return err;
        return result;
      })
      .catch(function (error) {
        return error;
      });
  }

  ownerOf(tokenId) {
    return this.contract.methods
      .ownerOf(tokenId)
      .call((err, result) => {
        if (err) return err;
        return result;
      })
      .catch(function (error) {
        return error;
      });
  }

  lastAddresses(count) {
    return this.contract.methods
      .lastAddresses(count)
      .call((err, result) => {
        if (err) return err;
        return result;
      })
      .catch(function (error) {
        return error;
      });
  }

  async resolveAddress(name) {
    let result = name;
    return this.contract.methods.resolveAddress(result).call((err, result) => {
      if (err) {
        console.error("Error: ", err);
        return err;
        // handle the error here
      } else {
        return result;
      }
    });
  }

  allowlistAddresses(address) {
    return this.contract.methods
      .allowlistAddresses(address)
      .call((err, result) => {
        if (err) return err;
        return result;
      })
      .catch(function (error) {
        return error;
      });
  }

  checkName(name) {
    let name2 = name;
    return this.contract.methods
      ._checkName(name2)
      .call((err, result) => {
        if (err) return err;
        return result;
      })
      .catch(function (error) {
        return error;
      });
  }

  isTaken(name) {
    let name3 = name;
    return this.contract.methods
      .tokenAddressandID(name3)
      .call((err, result) => {
        if (err) return err;
        return result;
      })
      .catch(function (error) {
        return error;
      });
  }

  setData(name, area, value, account) {
    return this.contract.methods
      .setDataAddress(name, area, value)
      .send({ from: account })

      .then((receipt) => {
        return receipt;
      })
      .catch(function (error) {
        return error;
      });
  }

  getData(name, data) {
    let result = name;
    return this.contract.methods
      .getUserData(result, data)
      .call((err, result) => {
        if (err) return err;
        return result;
      });
  }

  getTwitter(name) {
    return this.getData(name, "twitter");
  }
  getInstagram(name) {
    return this.getData(name, "instagram");
  }
  getEmail(name) {
    return this.getData(name, "email");
  }
  getUrl(name) {
    return this.getData(name, "url");
  }
  getAvatar(name) {
    return this.getData(name, "avatar");
  }
  getAbout(name) {
    return this.getData(name, "about");
  }
  getDiscord(name) {
    return this.getData(name, "discord");
  }
  getTelegram(name) {
    return this.getData(name, "telegram");
  }
};
