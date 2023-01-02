const axios = require("axios").default;

// axios.test.js
// import { BASE_URL, fetchUsers } from "./utils";
const BASE_URL = require("./usingaxios").BASE_URL;
const fetchUsers = require("./usingaxios").fetchUsers;

jest.mock("axios");
describe("fetchUsers", () => {
  describe("when API call is successful", () => {
    it("should return users list", async () => {
      // arrange
      const users = [
        { id: 1, name: "John" },
        { id: 2, name: "Andrew" },
      ];
      axios.get.mockResolvedValueOnce(users);

      // act
      const result = await fetchUsers();

      // assert
      expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/users`);
      expect(result).toEqual(users);
    });
  });

  describe("when API call fails", () => {
    it("should return empty users list", async () => {
      // given
      const message = "Network Error";
      axios.get.mockRejectedValueOnce(new Error(message));

      // when
      const result = await fetchUsers();

      // then
      expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/users`);
      expect(result).toEqual([]);
    });
  });
});
