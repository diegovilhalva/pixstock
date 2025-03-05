
"use strict";

import { urlEncode } from "./urlEncode";

export const updateUrl = (filterObj, searchType) => {
    setTimeout(() => {
        const root = window.location.origin
        const searcgQuery = urlEncode(filterObj)

        window.location = `${root}/pages/${searchType}/${searchType}.html?${searcgQuery}`
    },500)
}