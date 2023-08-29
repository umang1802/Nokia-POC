import React from "react";
import TreeMenu from "react-simple-tree-menu";
import '../../node_modules/react-simple-tree-menu/dist/main.css';

export default function Sidebar(props) {
  return (
    <div className="bg-white shadow-lg h-screen px-4 py-4">
      <TreeMenu
        cacheSearch
        data={[
          {
            key: "modules",
            label: "Modules",
            nodes: [
              {
                key: "security-setup",
                label: "Security setup",
                // url: "https://www.google.com/search?q=canidae",
              },
              {
                key: "metadata-maintainence",
                label: "Metadata maintainence",
                url: "https://www.google.com/search?q=canidae",
              },
              {
                key: "project-forecast",
                label: "Project & CT Forecast",
                url: "https://www.google.com/search?q=canidae",
                nodes: [
                    {
                        key: "manual-revenue-forecast",
                        label: "Manual Revenue Forecast",
                    },
                    {
                        key: "manual-cost-forecast",
                        label: "Manual Cost Forecast",
                    },
                    {
                        key: "ct-adjustments",
                        label: "CT Adjustment",
                    },
                    {
                        key: "calculate-revenue",
                        label: "Calculate Sales"
                    }

                ]
              },
              {
                key: "asbl-eac",
                label: "ASBL & EAC",
                url: "https://www.google.com/search?q=canidae",
              },
              {
                key: "risk-update",
                label: "Risk & Update",
                url: "https://www.google.com/search?q=canidae",
              },
              {
                key: "admin-tasks",
                label: "Admin and GKU Tasks",
                url: "https://www.google.com/search?q=canidae",
              },
              {
                key: "usd-conversion",
                label: "USD Conversion & Management",
                url: "https://www.google.com/search?q=canidae",
              },
              {
                key: "project-cost",
                label: "Project Cost Category",
                url: "https://www.google.com/search?q=canidae",
              },
              {
                key: "order-book",
                label: "Order Book",
                url: "https://www.google.com/search?q=canidae",
              }
            ],
            url: "https://www.google.com/search?q=mammal",
          }
        ]}
        debounceTime={125}
        disableKeyboard={false}
        hasSearch
        onClickItem={(value) => {
            console.log("value", value)
            props.nodeSelected(value)
        }}
        resetOpenNodesOnDataUpdate={false}
      />
    </div>
  );
}
