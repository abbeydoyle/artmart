const chalk = require('chalk');

// helper idbpromise function, put get delete
export function idbPromise(storeName, method, object) {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open("ArtMart", 1);
    let db, tx, store;
    request.onupgradeneeded = function (e) {
      const db = request.result;
      db.createObjectStore("products", { keyPath: "_id" });
      db.createObjectStore("cart", { keyPath: "_id" });
      db.createObjectStore("wishlist", { keyPath: "_id" });
    };

    request.onerror = function (e) {
      console.log(chalk.bgHex('#508192').white(("There was an error")));
    };

    request.onsuccess = function (e) {
      db = request.result;
      tx = db.transaction(storeName, "readwrite");
      store = tx.objectStore(storeName);

      db.onerror = function (e) {
        console.log("error", e);
      };

      switch (method) {
        case "put":
          store.put(object);
          resolve(object);
          break;
        case "get":
          const all = store.getAll();
          all.onsuccess = function () {
            resolve(all.result);
          };
          break;
        case "delete":
          store.delete(object._id);
          break;
        default:
          console.log(chalk.bgHex('#508192').white(("No valid method")));
          break;
      }

      tx.oncomplete = function () {
        db.close();
      };
    };
  });
}
