import expressAsyncHandler from "express-async-handler";
import UserType from "../models/UserType.js";

// input format =>
// {
//  customer: {name: "alex",email: "alex@gmail.com"},
//  refund: {note: "cause of refund",id: "5634_refun_id"}
// }
// TODO: Add Refund Info Based on Webhook
export const addRefundInfo = expressAsyncHandler(async (req, res) => {
  const payload = req.body;

  const refund = payload?.refund;
  const customer = payload?.customer;
  const email = customer?.email;
  const firstName = customer?.name;

  const customerInDb = await UserType.findOne({ email, shop: "" });

  const isRefundWebhookExists =
    customerInDb &&
    customerInDb?.webhooks?.find((dt) => dt.webhookType === "refund");

  if (!customerInDb && email) {
    const createUserType = new UserType({
      email,
      firstName,
      note: refund?.note,
      webhooks: { webhookType: "refund", count: 1, webhookIds: refund.id },
    });

    await createUserType.save();
  } else if (customerInDb && isRefundWebhookExists && email) {
    customerInDb.webhooks = customerInDb.webhooks.map((dt) =>
      dt.webhookType === "refund" && !dt.webhookIds.includes(refund.id)
        ? {
            ...dt,
            count: dt.count + 1,
            webhookIds: [...dt.webhookIds, refund?.id],
          }
        : { ...dt }
    );

    await customerInDb.save();
  } else {
    await UserType.findOneAndUpdate(
      {
        email,
        shop: "",
      },
      {
        $push: {
          webhooks: {
            webhookType: "refund",
            count: 1,
            webhookIds: refund.id,
          },
        },
      },
      {
        new: true,
      }
    );
  }

  res.end();
});

// input format =>
// {
//  customer: {name: "alex",email: "alex@gmail.com"},
//  chargeback: {note: "cause of chargeback",id: "5634_chargeback_id"}
// }

// TODO: Add ChargeBack Info Based on webhook
export const addChargeBackInfo = expressAsyncHandler(async (req, res) => {
  const payload = req.body;
  const chargeback = payload?.chargeback;
  const customer = payload?.customer;
  const email = customer?.email;
  const username = customer?.name;

  const customerInDb = await UserType.findOne({ email, shop: "" });

  const isChargebackExists =
    customerInDb &&
    customerInDb?.webhooks?.find((dt) => dt.webhookType === "chargeback");

  if (!customerInDb && email) {
    const createUserType = new UserType({
      email,
      username,
      note: chargeback?.note,
      webhooks: {
        webhookType: "chargeback",
        count: 1,
        webhookIds: chargeback.id,
      },
    });

    await createUserType.save();
  } else if (customerInDb && isChargebackExists && email) {
    customerInDb.webhooks = customerInDb.webhooks.map((dt) =>
      dt.webhookType === "chargeback" && !dt.webhookIds.includes(chargeback.id)
        ? {
            ...dt,
            count: dt.count + 1,
            webhookIds: [...dt.webhookIds, chargeback?.id],
          }
        : { ...dt }
    );

    await customerInDb.save();
  } else {
    await UserType.findOneAndUpdate(
      {
        email,
        shop: "",
      },
      {
        $push: {
          webhooks: {
            webhookType: "chargeback",
            count: 1,
            webhookIds: chargeback.id,
          },
        },
      },
      {
        new: true,
      }
    );
  }

  res.end();
});
