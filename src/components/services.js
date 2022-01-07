import React from "react"
import { Table } from "antd"

const services = ["Oil change", "Valve cover gasket replacement","Oil filter housing gasket replacement","Oil pan gasket replacement","downpipes/chargepipes / cold air intake install", "Turbo kits/ turbo swaps/ upgraded turbos","Custom exhaust jobs/ exhaust installation", "Water pump/ thermostat", "Walnut blasting", "Tune ups", "Transmission swaps", "Clutch replacements", "Brake & rotors"]

const dataSource = services.map((str, i) => {
    return {
        key: String(i +1),
        name: str
    }
})

const columns = [
  {
    title: <h2>Services</h2>,
    dataIndex: "name",
    key: "name",
    className: 'services-table'
  },
]

export const Services = () => {
  return (
    <div>
      <Table dataSource={dataSource} columns={columns} pagination={false}/>
    </div>
  )
}
