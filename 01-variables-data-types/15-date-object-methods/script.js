let d;
d = new Date();
d = d.toLocaleString('default',
    {
        month: "long",
        year: "numeric",
        month : "short",
        day : "numeric",
        weekday : "long",
        hour : "numeric",
        minute : "numeric",
        seconds : "numeric"
        // timeZone : "Navi_Mumbai, India"


    }
);
console.log(d);