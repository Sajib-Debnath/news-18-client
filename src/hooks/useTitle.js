import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - News 18`;
    }, [title])
};

export default useTitle;