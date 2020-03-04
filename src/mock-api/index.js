import { Server, Model, hasMany, belongsTo, JSONAPISerializer } from "miragejs";
import xps1 from "./assets/dell-xps-1.jpg";
import xps2 from "./assets/dell-xps-2.jpg";
import xps3 from "./assets/dell-xps-3.jpg";
import mbp1 from "./assets/macbook-pro-1.jpg";
import mbp2 from "./assets/macbook-pro-2.jpg";
import mbp3 from "./assets/macbook-pro-3.jpg";
import basic1 from "./assets/basic-laptop-1.jpg";
import basic2 from "./assets/basic-laptop-2.jpg";
import woman1 from "./assets/woman-1.jpg";

export function create(environment = "development") {
  return new Server({
    environment,

    models: {
      user: Model.extend({
        offers: hasMany("offer"),
        sales: hasMany("sale"),
        buys: hasMany("sale")
      }),
      auction: Model.extend({
        bids: hasMany("bid")
      }),
      bid: Model.extend({
        user: belongsTo("user"),
        auction: belongsTo("auction")
      }),
      offer: Model.extend({
        seller: belongsTo("user")
      }),
      sale: Model.extend({
        seller: belongsTo("user", { inverse: "sales" }),
        buyer: belongsTo("user", { inverse: "buys" })
      })
    },

    serializers: {
      application: JSONAPISerializer
    },

    seeds(server) {
      const schema = server.schema;

      const user1 = schema.users.create({
        username: "jmederos",
        password: "1234",

        firstName: "Jorge",
        lastName: "Mederos",
        avatar: woman1,
        balance: 3000
      });

      [xps1, xps2, xps3].forEach(img => {
        schema.offers.create({
          seller: user1,
          name: "Dell XPS 9570",
          description: "This is a really awesome computer.",
          value: 900,
          amount: 8,
          image: img
        });
      });

      const user2 = schema.users.create({
        username: "daniel",
        password: "1234",

        firstName: "Daniel",
        lastName: "Ortiz",
        avatar: woman1,
        balance: 3000
      });

      [mbp1, mbp2, mbp3].forEach(img => {
        schema.offers.create({
          seller: user2,
          name: "Macbook Pro",
          description: "This is a brand new macbook pro, beautifully designed.",
          value: 1200,
          amount: 3,
          image: img
        });
      });

      const user3 = schema.users.create({
        username: "osmany",
        password: "1234",

        firstName: "Osmany",
        lastName: "Perez",
        avatar: woman1,
        balance: 3000
      });

      [basic1, basic2].forEach(img => {
        schema.offers.create({
          seller: user3,
          name: "Basic Laptop",
          description: "This is a pretty standard good looking laptop.",
          value: 600,
          amount: 5,
          image: img
        });
      });
    },

    routes() {
      this.timing = 2000;

      this.get("/offers");
      this.get("/offers/:id");
      this.get("/users");
      this.get("/users/:id");
    }
  });
}
