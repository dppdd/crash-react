export const bootstrapTableDB = {
  tableStructure: [
    { name: "#", metaKey: "id", type: "string/url" },
    { name: "First", metaKey: "firstName", type: "string" },
    { name: "Last", metaKey: "lastName", type: "string" },
    { name: "Handle", metaKey: "handle", type: "string" },
  ],
  tableMeta: {
    page: 1,
    itemsPerPage: 20,
    totalPages: 1,
  },
  tableData: [
    {
      id: "1",
      firstName: "Dimitar",
      lastName: "Dimitrov",
      handle: "handle",
    },
    {
      id: "2",
      firstName: "John",
      lastName: "JQ",
      handle: "handle",
    },
    {
      id: "3",
      firstName: "Elizabeth",
      lastName: "Doe",
      handle: "handle",
    },
  ],
};
