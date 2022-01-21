import { useContext } from "react";
import { langContext } from "./Contextlang";

import  {useState , useEffect } from "react";

function ChangeLanguage() {
    const { contextLang, setContextLang } = useContext(langContext)



	const [lang, setlang] = useState(() => {
    const saved = localStorage.getItem("lang");
    const initialValue = JSON.parse(saved);
    if(initialValue != null){
		setContextLang(initialValue)
    }else {
    	setContextLang("en")
    }
});
	useEffect(() => {
    	localStorage.setItem("lang", JSON.stringify(contextLang));
	}, [contextLang]);

return (
    <div>
    	<button
        className="btn text-light"
        onClick={() => setContextLang(contextLang === "ar" ? "en" : "ar")}
    	>
        {contextLang}
    	</button>
    </div>

	);
}

export default ChangeLanguage;