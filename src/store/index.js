import { createStore } from 'vuex'
import axios from 'axios';


const chatModule = {
    state: () => ({ 
      rooms : []
    }),
    mutations: {
      
    },
    actions: {
      
    },
    getters: { }
  
}
export default createStore({
  state: {
    regions : [],
    countries : [],
    user : {},
    token : '',
    packages : [],
    activites : [],
    skills : [],
    expers : [],
    certifications : [],
    employments : [],
    qualifications : [],
    specializations : [],
    users : [],
    categories : [],
    cities : [],
    job : null,
    profile : {},
    otp : null,
    password : null,
    city_id : null,
    city : null,
    city_name : null,
    permissions : {},
    newEmp : null,
    emps : [],
    isDeleted : null,
    region_name : null,
    region_id : null,
    companyType : null,
    ads : [],
    rooms : [],
    singleRoom : [],
    messages : [],
    settings : {},
    top : [],
    parteners : [],
    vision : '',
    user_profile : {}
  },
  getters: {
    users : state => state.users 
  },
  mutations: {
    // set chat rooms 
    setChatRooms(state, rooms){
      state.rooms = rooms ;
    },
    setRegions(state, regions){
      state.regions = regions;
    },
    setCountries( state, countries ){
      state.countries = countries ;
    },
    // set user data 
    setUserData( state , user ){
      state.user = user ;
    },
    // set user token after login 
    setToken( state, token ){
      state.token = token
    },
    // set packages 
    setPackages( state , packages ){
      state.packages = packages
    },
    // set activities  
    setActivities( state , activites ){
      state.activites = activites ;
    },
    // set skills 
    setSkills( state , skills ){
      state.skills = skills ;
    },
    // set experiences 
    setExper( state , expers ){
      state.expers = expers
    },
    // set certifications 
    setCertifications( state, certifications ){
      state.certifications = certifications
    },
    // set certifications 
    setEmp( state, employments ){
      state.employments = employments
    },
    // set qualifiactions 
    setQual( state, qualifications ){
      state.qualifications = qualifications
    },
    // set specializtions 
    setSpec( state, specializations ){
      state.specializations = specializations
    },

    setUsers( state, users ){
      state.users = users
    },
    // set categories 
    getCategories( state, categories ){
      state.categories = categories ;
    },
    // set cities 
    setCities( state, cities ){
      state.cities = cities ;
    },
    // set job add 
    setJobAdds(state, job){
      state.job = job
    },
    // set Company Profile
    setCompanyProfile(state, profile){
      state.profile = profile;
      state.city_name = profile.city.name ;
      state.city_id = profile.city.id ;
      state.region = profile.region ;
      state.region_name = profile.region.name;
      state.region_id = profile.region.id;
      state.companyType = profile.type ;
    },
    setCity( state, city ){
      state.city = city ;
    },
    otpChanged(state, otp){
      state.otp = otp ;
    },
    passwordPassed(state, password){
      state.password = password
    },
    // set new profile 
    setNewProfile(state, profile){
      state.profile = profile
    },
    // set permissions 
    setPermissions( state, permissions ){
      state.permissions = permissions ;
    },
    // set new emp 
    setNewEemp(state, newEmp){
      state.newEmp = newEmp
    },
    setAllEmp(state, emps){
      state.emps = emps ;
    },
    deleteEmp(state, isDeleted){
      state.isDeleted = isDeleted ;
    },
    // set advertisements 
    setAds( state, ads ){
      state.ads = ads ;
    },
    // set single room 
    setSingleRoom( state, singleRoom ){
      state.singleRoom = singleRoom
    },
    // room messages 
    setRoomMessages( state, messages  ){
      state.messages = messages ;
    },
    SET_SETTINGS( state, settings ){
      state.settings = settings ;
    },
    SET_TOP( state, top ){
      state.top = top ;
    },
    SET_PARTENERS( state, parteners ){
      state.parteners = parteners ;
    },
    SET_VISION( state , vision ){
      state.vision = vision ;
    },
    USER_PROFILE( state , user_profile ){
      state.user_profile  = user_profile ;
    }
  },
  actions: {
    // get chat rooms rooms 
    getchatRooms( {commit} ){
      const token = localStorage.getItem('token');  
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      return axios.get('get-rooms', {headers})
      .then( (res)=>{
        const response = res.data.data.rooms;
        commit('setChatRooms', response);
      } )
    },
    // get single room members 
    getSingleRoom( {commit} , room_id){
      const token = localStorage.getItem('token');  
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      return axios.get(`room-members/${room_id}`, {headers})
      .then( (res)=>{
        const responseUSer= Object.values(res.data.data)[1];
        commit('setSingleRoom', responseUSer);
      } )
    },
    // get single chat messages 
    getSingleRoomMessages({commit}, room_id){
      const token = localStorage.getItem('token');  
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      return axios.get(`get-room-messages/${room_id}`, {headers})
      .then( (res)=>{
        const response= res.data.data.messages;
        commit('setRoomMessages', response);
      } )
    },
    // get regions 
    getRegions( { commit } ){
      return axios.get('regions')
      .then( (res)=>{
        const regions = res.data.data;
        commit('setRegions', regions);
      } )
    },
    // get countries 
    getCounntries( { commit } ){
      return axios.get('countries')
      .then( (res)=>{
        const countries = res.data.data;
        commit('setCountries', countries)
      } )
    },
    // get packages 
    getPackages( {commit} ){
      return axios.get('packages')
      .then( (res)=>{
        const packages = res.data.data;
        commit ( 'setPackages', packages )
      } )
    },
    // get activites 
    getActivities( {commit} ){
      return axios.get('types')
      .then( (res)=>{
        const activites = res.data.data ;
        commit('setActivities', activites)
      } )
    },
    // get skills 
    getSkills( {commit} ){
      return axios.get('skills')
      .then( (res)=>{
        const skills = res.data.data;
        commit('setSkills', skills)
      } )
    },
    // get experience 
    getExp( { commit } ){
      return axios.get('experiences')
      .then( (res)=>{
        const expers = res.data.data ;
        commit( 'setExper', expers )
      } )
    },
    // get certifications 
    getCertifications( {commit} ){
      return axios.get('certifications')
      .then( (res)=>{
        const certifications = res.data.data ;
        commit( 'setCertifications', certifications )
      } )
    },
    // get employment ( المجال الوظيفي ) 
    getEmp( {commit} ){
      return axios.get('employments')
      .then( (res)=>{
        const employments = res.data.data ;
        commit( 'setEmp', employments )
      } )
    },
    // get qualifications
    getQual( {commit} ){
      return axios.get('qualifications')
      .then( (res)=>{
        const qualifications = res.data.data ;
        commit( 'setQual', qualifications )
      } )
    },
    // get specializtions
    getSpec( {commit} ){
      return axios.get('specializations')
      .then( (res)=>{
        const specializations = res.data.data ;
        commit( 'setSpec', specializations )
      } )
    },
    // get categories 
    getCat( {commit} ){
      return axios.get('categories')
      .then( (res)=>{
        const categories = res.data.data ;
        commit( 'getCategories', categories )
      } )
    },
    // get cities 
    getCities( {commit} ){
      return axios.get('cities')
      .then( (res)=>{
        const cities = res.data.data ;
        commit( 'setCities', cities )
      } )
    },
    // register main method 
    register( {commit} , formData){
      return axios.post('company/register', formData)
      .then( (res)=>{
        if( res.data.key === 'success' ){
          commit('setUserData', res.data.data[0]);
          return { success : true , message : res.data.msg };
        }else{
          console.error( res.data.message );
          return { success : false , message : res.data.msg } ;
        }
      } )
    },

    // login main method 
    login( {commit}, formData ){
      return axios.post('company/login', formData)
      .then( (res)=>{
        if( res.data.key === 'success' ){
          commit('setUserData', res.data.data);
          commit('setToken', res.data.data.token);

          return { success : true , message : res.data.msg, sub : res.data.data.subscription };
        }else{
          console.error( res.data.message );
          return { success : false , message : res.data.msg } ;
        }
      } )
    },

    // search users main method 
    search( {commit} , formData ){
      // Get the token from localStorage
      const token = localStorage.getItem('token');

      // Create headers object with Authorization header
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      return axios.post('company/users/search?page=1', formData, {headers})
      .then( (res)=>{
        if( res.data.key === 'success' ){
          commit('setUsers', res.data.data)
          return { success : true, message : res.data.msg  };
        }else{
          return { success : false , messgae : res.data.msg };
        }
      } )
    },
    // get user profile 
    getUserProfile( { commit }, formData ){
      const token = localStorage.getItem('token');
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      return axios.post('company/users/profile', formData, {headers})
      .then( (res)=>{
        const response = res.data.data ;
        commit('USER_PROFILE', response);
      } )
    },
    // add job advertisement main method 
    addJobAdds( {commit}, formData ){
      const token = localStorage.getItem('token');
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      return axios.post('company/advertisements/store', formData, {headers})
      .then( (res)=>{
        if( res.data.key === 'success' ){
          commit('setJobAdds', res.data);
          return { success : true, message : res.data.msg } 
        }else{
          return { success : false , message : res.data.msg}
        }
      } )
    },

    // edit job advetisement 
    editJobAds( { commit }, formData){
      const token = localStorage.getItem('token');
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      return axios.post('company/advertisements/update', formData, {headers})
      .then( (res)=>{
        if( res.data.key === 'success' ){
          commit('setJobAdds', res.data);
          return { success : true, message : res.data.msg } 
        }else{
          return { success : false , message : res.data.msg}
        }
      } )
    },
    // get company profile 
    getCompanyProfile( {commit} ){
      const token = localStorage.getItem('token');
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      return axios.get( 'company/profile', {headers} )
      .then( (res)=>{
        const profile = res.data.data ;
        localStorage.setItem('profile', JSON.stringify(profile))
        commit( 'setCompanyProfile', profile );
        commit( 'setCity',  profile.city)
      } )
    },

    // change phone password 
    changePhonePass({commit}, formData){
      const token = localStorage.getItem('token');
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      return axios.post('company/phone/change', formData , {headers})
      .then( (res)=>{
        if( res.data.key === 'success' ){
          commit('passwordPassed', res.data.data);
          return { success : true , message : res.data.msg }
        }else{
          return { success : false , message : res.data.msg }
        }
      } )
    },
    // change password old password 
    changePassOldPass({commit}, formData){
      const token = localStorage.getItem('token');
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      return axios.post('company/change/password/send/code', formData , {headers})
      .then( (res)=>{
        if( res.data.key === 'success' ){
          commit('passwordPassed', res.data.data);
          return { success : true , message : res.data.msg }
        }else{
          return { success : false , message : res.data.msg }
        }
      } )

    },
    // send otp 
    sendOtp({commit}, formData){
      const token = localStorage.getItem('token');
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      return axios.post('company/phone/change/check-code', formData , {headers})
      .then( (res)=>{
        if( res.data.key === 'success' ){
          commit('otpChanged', res.data.data);
          return { success : true , message : res.data.msg }
        }else{
          return { success : false , message : res.data.msg }
        }
      } )
    },
    // send otp for password 
    sendPassOtp( {commit}, formData ){
      const token = localStorage.getItem('token');
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      return axios.post('company/change/password/check/code', formData , {headers})
      .then( (res)=>{
        if( res.data.key === 'success' ){
          commit('otpChanged', res.data.data);
          return { success : true , message : res.data.msg }
        }else{
          return { success : false , message : res.data.msg }
        }
      } )
    },
    // update profile password 
    updatePassword( {commit}, formData ){
      const token = localStorage.getItem('token');
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      return axios.post('company/password/update', formData , {headers})
      .then( (res)=>{
        if( res.data.key === 'success' ){
          commit('otpChanged', res.data.data);
          return { success : true , message : res.data.msg }
        }else{
          return { success : false , message : res.data.msg }
        }
      } )
    },

    // update profile 
    updateProfile( {commit}, formData ){
      const token = localStorage.getItem('token');
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      return axios.post('company/profile/update', formData , {headers})
      .then( (res)=>{
        if( res.data.key === 'success' ){
          commit('setNewProfile', res.data.data);
          return { success : true , message : res.data.msg }
        }else{
          return { success : false , message : res.data.msg }
        }
      } )
    },

    // get permissions
    getPermissions( {commit} ){
      const token = localStorage.getItem('token');
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      return axios.get('company/employees/permissions', {headers})
      .then( (res)=>{
        const response  = res.data.data ;
        console.log(`perm${res.data.data}`)
        
        commit('setPermissions', response);
      } )
    },
    // store employee 
    storeEmp( {commit}, formData ){
      const token = localStorage.getItem('token');
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      return axios.post('company/employees/store', formData , {headers})
      .then( (res)=>{
        if( res.data.key === 'success' ){
          commit('setNewEemp', res.data.data);
          return { success : true , message : res.data.msg }
        }else{
          return { success : false , message : res.data.msg }
        }
      } )

    },
    // get all employees 
    getAllEmps( {commit} ){
      const token = localStorage.getItem('token');
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      return axios.get('company/employees', {headers})
      .then( (res)=>{
        const response = res.data.data ;
        commit('setAllEmp',response )
      } )
    },
    // delete employee 
    deleteEmp( {commit}, emp_id ){
      const token = localStorage.getItem('token');
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      return axios.post('company/employees/delete', emp_id , {headers})
      .then( (res)=>{
        if( res.data.key === 'success' ){
          commit('deleteEmp', res.data.data);
          return { success : true , message : res.data.msg }
        }else{
          return { success : false , message : res.data.msg }
        }
      } )
    },
    // get advertisements 
    getAds( {commit} ){
      const token = localStorage.getItem('token');
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      return axios.get('company/advertisements', {headers})
      .then( (res)=>{
        const response = res.data.data ;
        commit('setAds', response)
      })
    },
    // contact us 
    contactUs(context , FormData){
      return axios.post('new-complaint', FormData)
      .then( (res)=>{
        if( res.data.key === 'success' ){
          return { success : true , message : res.data.msg }
        }else{
          return { success : false , message : res.data.msg }
        }
      } )
    },
    // get settings 
    getSettings( { commit } ){
      return axios.get('settings')
      .then( (res)=>{
        const response = res.data.data ;
        commit('SET_SETTINGS', response);
      } )
    },
    // log out 
    logOut(){
      const token = localStorage.getItem('token');
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      return axios.delete('company/logout', {headers})
      .then( (res)=>{
        if( res.data.key === 'success' ){
          return { success : true , message : res.data.msg }
        }else{
          return { success : false , message : res.data.msg }
        }
      } )
    },
    // get top sections 
    getTopSection({commit}){
      return axios.get('top-section')
      .then( (res)=>{
        const response = res.data.data ;
        commit('SET_TOP', response);
      } )
    },

    // get parteners 
    getParteners( { commit } ){
      return axios.get('partners')
      .then( (res)=>{
        const response = res.data.data ;
        commit( 'SET_PARTENERS',response  )
      } )
    },
    // get vision 
    getVision( {commit} ){
      return axios.get('our-vision')
      .then( (res)=>{
        const response = res.data.data ;
        commit('SET_VISION', response)
      } )
    }
  },
  modules: {
    chat : chatModule
  }
})
