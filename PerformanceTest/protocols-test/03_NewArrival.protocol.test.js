import { Trend } from "k6/metrics";
import { check, group } from "k6";
import http from "k6/http";
import { harNewArrival } from "../batchResponse/harNewArrival.js";

const pageDuration = new Trend("page_newArrival_duration", true);

export default function () {
  group("02_detail_product_page", () => {
    const responses = http.batch(harNewArrival);
    for (const res of responses) {
      pageDuration.add(res.timings.duration);
      check(res, {
        "status 200": (res) => res.status === 200,
      });
    }
  });
}
