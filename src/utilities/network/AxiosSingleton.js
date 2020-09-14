import axios from 'axios';

class SingletonClass {
    static instance = undefined;

    static createInstance() {
        let AxiosInstance = axios.create({
            timeout: 10000,
        });
        AxiosInstance.defaults.params = {}
        AxiosInstance.defaults.params['api_key'] = "86f3b16323fdf80abce55f89016b2432";
        return AxiosInstance
    };

    static getInstance(baseUrl) {
        if (!SingletonClass.instance) {
            SingletonClass.instance = SingletonClass.createInstance();
        }
        return SingletonClass.instance;
    };

    static resetInstance() {
        SingletonClass.instance = undefined;
    }
}

export default SingletonClass;
