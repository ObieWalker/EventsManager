export default {
    session: !!sessionStorage.jwt,
    isRegistered: !!sessionStorage.registered,
    centers: [],
    center: {}
};