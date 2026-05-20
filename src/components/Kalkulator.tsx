"use client";

import { useState } from "react";
import wasteData from "@/data/price.json";

type WeightState = {
  [key: number]: number;
};

export default function Kalkulator() {
  const [weights, setWeights] =
    useState<WeightState>({});

  // Format rupiah Indonesia
  const formatRupiah = (
    value: number
  ) => {
    return new Intl.NumberFormat(
      "id-ID"
    ).format(value);
  };

  const handleWeightChange = (
    id: number,
    value: string
  ) => {
    setWeights((prev) => ({
      ...prev,
      [id]: Number(value),
    }));
  };

  const calculateSubtotal = (
    price: number,
    weight: number
  ) => {
    return price * weight;
  };

  const totalPrice = wasteData.reduce(
    (total, item) => {
      const weight =
        weights[item.id] || 0;

      return (
        total + item.price * weight
      );
    },
    0
  );

  return (
    <div className="bg-gray-50 dark:bg-slate-900">
      <div className="max-w-2xl mx-auto p-6 min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors">
        <h1 className="text-3xl font-bold mb-6 mt-[80px] text-slate-900 dark:text-gray-50">
          Kalkulator Sampah Plastik
        </h1>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 bg-gray-50">
            
            <thead className="bg-green-600 text-gray-50 dark:bg-green-700">
              <tr>
                <th className="p-3 text-left">
                  Jenis Sampah
                </th>

                <th className="p-3 text-left">
                  Harga / Kg
                </th>

                <th className="p-3 text-left">
                  Berat (Kg)
                </th>

                <th className="p-3 text-left">
                  Subtotal
                </th>
              </tr>
            </thead>

            <tbody className="bg-gray-50 dark:bg-slate-900">
              {wasteData.map((item) => {
                const weight =
                  weights[item.id] || 0;

                const subtotal =
                  calculateSubtotal(
                    item.price,
                    weight
                  );

                return (
                  <tr
                    key={item.id}
                    className="border border-gray-300"
                  >
                    <td className="p-3 text-slate-900 dark:text-gray-50">
                      {item.name}
                    </td>

                    <td className="p-3 text-slate-900 dark:text-gray-50">
                      Rp
                      {formatRupiah(
                        item.price
                      )}
                    </td>

                    <td className="p-3 text-slate-900 dark:text-gray-50">
                      <input
                        type="number"
                        min="0"
                        step="0.1"
                        placeholder="0"
                        value={
                          weights[item.id] ||
                          ""
                        }
                        onChange={(e) =>
                          handleWeightChange(
                            item.id,
                            e.target.value
                          )
                        }
                        className="w-24 border border-gray-300 text-slate-900 dark:text-gray-50 rounded-lg p-2 bg-gray-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </td>

                    <td className="p-3 font-medium text-slate-900 dark:text-gray-50">
                      Rp
                      {formatRupiah(
                        subtotal
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Total */}
        <div className="mt-6 flex justify-end">
          <div className="bg-green-100 dark:bg-green-900 p-4 rounded-xl">
            
            <p className="text-lg text-slate-900 dark:text-gray-200">
              Total Harga
            </p>

            <h2 className="text-3xl font-bold text-green-700 dark:text-green-200">
              Rp
              {formatRupiah(totalPrice)}
            </h2>

          </div>
        </div>
      </div>
    </div>
  );
}
