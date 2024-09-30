import axios from "axios";
import { rootUrl } from "./App";

export const Http = Axios.create({
    baseUrl: rootUrl
})