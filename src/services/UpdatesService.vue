<script lang="ts">
import axios from "axios";

class UpdatesService {
  async getNews() {
    const response = await axios.get(
      "https://serpapi.com/search.json?q=InternationalStudent&tbm=nws&location=Canada&api_key=f69cf4e51ef00f00b66b9ed10cc4d4f8020d3395213d6ade7085e158fbd1a6f2&length=5"
    );
    return response.data;
  }

  async getUserProfiles() {
    const response = await axios.get("http://localhost:3000/getuserprofiles");
    return response.data;
  }

  async getUserLoginData(username: string) {
    const response = await axios.post(
      "http://localhost:3000/getuserlogindata",
      { userEmailId: username }
    );
    return response.data;
  }

  async insertUserProfileData(userDeatils: any) {
    const response = await axios.post(
      "http://localhost:3000/insertuserprofiledata",
      userDeatils
    );
    return response.data;
  }

  async getUserProfileData() {
    const response = await axios.post(
      "http://localhost:3000/getuserprofiledata",
      {
        userProfileID: sessionStorage.getItem("userProfileID"),
      }
    );
    return response.data;
  }

  async updateUserProfileData(userProfile: any) {
    const response = await axios.post(
      "http://localhost:3000/updateuserprofiledata",
      {
        _id: sessionStorage.getItem("userProfileID"),
        ...userProfile,
      }
    );
    return response.data;
  }
}

const updatesService: UpdatesService = new UpdatesService();
export default updatesService;
</script>
