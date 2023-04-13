import React from 'react';

function Test(props) {
    return (
        <div className={"h-screen w-screen bg-white p-36"}>
            <section className={"mx-auto max-w-7xl bg-amber-50"}>
                <div className={"text-slate-900"}>
                    page de test
                </div>
                <button className={"flex justify-center items-center rounded shadow-2xl " +
                    "bg-cyan-900 text-white border-2 border-blue-950 px-6 py-3 text-xs"}>
                    Boutton de test
                </button>
            </section>
        </div>
    );
}

export default Test;