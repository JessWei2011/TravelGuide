const NAV_ITEMS = [
    { target: "cover", icon: "🏠", label: "首頁" },
    { target: "flights", icon: "✈️", label: "航班" },
    { target: "transport", icon: "🚗", label: "交通" },
    { target: "itinerary", icon: "📅", label: "行程" },
    { target: "hotels", icon: "🏨", label: "飯店" }
];

const TRIP_DATA = {
    cover: {
        emoji: "🇻🇳 ✈️ 🧳",
        title: "越南河內・下龍灣之旅",
        dateRange: "2026.09.15 – 2026.09.19",
        subtitle: "Hanoi & Ha Long Bay Travel Guide",
        route: "Hanoi • Ha Long Bay",
        stamp: "✦ VIETNAM · HANOI 2026 ✦"
    },

    flights: [
        {
            title: "去程｜09/15 星期二",
            from: "(TPE) 桃園國際機場 T1",
            to: "(HAN) 河內內排機場 T2",
            depart: "08:20",
            arrive: "10:30",
            flightNo: "CI 791 (中華航空)"
        },
        {
            title: "回程｜09/19 星期六",
            from: "(HAN) 河內內排機場 T2",
            to: "(TPE) 桃園國際機場 T1",
            depart: "17:50",
            arrive: "21:45",
            flightNo: "CI 794 (中華航空)"
        }
    ],

    hotels: [
        {
            dates: "9/15 - 9/16（1晚）",
            name: "金藝術飯店 (Golden Art Hotel)",
            location: "河內老城區 (Hoan Kiem)",
            address: "6A Hang But, Hoan Kiem, Hanoi, 10000 越南",
            mapQuery: "Golden Art Hotel Hanoi",
            checkIn: "14:00",
            checkOut: "12:00",
            breakfast: "蜜月客房"
        },
        {
            dates: "9/16 - 9/17（1晚）",
            name: "Tru by Hilton Ha Long Hon Gai Centre",
            location: "下龍灣 (Hon Gai)",
            address: "168 Le Thanh Tong, Bach Dang, 10, Hong Gai, Quang Ninh, 200000 越南",
            mapQuery: "Tru by Hilton Ha Long Hon Gai Centre",
            checkIn: "15:00",
            checkOut: "12:00",
            breakfast: "客房 (1張特大雙人床)"
        },
        {
            dates: "9/17 - 9/19（2晚）",
            name: "金藝術飯店 (Golden Art Hotel)",
            location: "河內老城區 (Hoan Kiem)",
            address: "6A Hang But, Hoan Kiem, Hanoi, 10000 越南",
            mapQuery: "Golden Art Hotel Hanoi",
            checkIn: "14:00",
            checkOut: "12:00",
            breakfast: "蜜月客房"
        }
    ],

    transport: {
        title: "機場接送與跨城交通",
        contactMethod: "Grab App / 飯店接駁 / 包車",
        legs: [
            {
                label: "去程接機",
                datetime: "09/15 10:30",
                from: "河內內排國際機場 T2",
                to: "金藝術飯店 (Golden Art Hotel)",
                orderNo: "CI 791 抵達後搭車"
            },
            {
                label: "河內 ⇄ 下龍灣接駁",
                datetime: "09/16 上午 / 09/17 下午",
                from: "河內市區 (Hoan Kiem)",
                to: "下龍灣 (Ha Long Bay)",
                orderNo: "高速公路約 2.5 ~ 3 小時"
            },
            {
                label: "回程送機",
                datetime: "09/19 14:30",
                from: "金藝術飯店 (Golden Art Hotel)",
                to: "河內內排國際機場 T2",
                orderNo: "CI 794 班機（17:50起飛）"
            }
        ]
    },

    itinerary: {
        days: [
            {
                date: "9/15（二）台北 ✈️ 河內",
                stops: [
                    {
                        label: "CI 791 航班（TPE 08:20 ➔ HAN 10:30）",
                        time: "08:20 - 10:30",
                        link: { type: "flight", index: 0 }
                    },
                    {
                        label: "內排機場辦理入境、領行李、換匯/網卡",
                        time: "10:30 - 11:30"
                    },
                    {
                        label: "搭車前往老城區飯店",
                        time: "11:30 - 12:30"
                    },
                    {
                        label: "金藝術飯店 (Golden Art Hotel) 辦理入住 / 寄放行李",
                        time: "14:00 Check-in",
                        link: { type: "hotel", index: 0 }
                    },
                    {
                        label: "還劍湖、三十六古街漫步、品嚐道地越式河粉與咖啡",
                        time: "下午 - 傍晚",
                        address: "Hoan Kiem Lake, Hanoi"
                    }
                ]
            },
            {
                date: "9/16（三）河內 ➔ 下龍灣",
                stops: [
                    {
                        label: "金藝術飯店退房",
                        time: "上午"
                    },
                    {
                        label: "搭乘接駁車/包車前往下龍灣 (Ha Long Bay)",
                        time: "車程約 2.5 小時"
                    },
                    {
                        label: "Tru by Hilton Ha Long Hon Gai Centre 辦理入住",
                        time: "15:00 Check-in",
                        link: { type: "hotel", index: 1 }
                    },
                    {
                        label: "下龍灣港口周邊、海灣遊船與夜景散策",
                        time: "下午 - 晚間",
                        address: "Ha Long, Quang Ninh, Vietnam"
                    }
                ]
            },
            {
                date: "9/17（四）下龍灣 ➔ 河內",
                stops: [
                    {
                        label: "飯店早餐與下龍灣晨間漫步",
                        time: "上午"
                    },
                    {
                        label: "Tru by Hilton Ha Long Hon Gai Centre 退房",
                        time: "12:00 前 Check-out"
                    },
                    {
                        label: "搭車返回河內市區",
                        time: "午後車程約 2.5 小時"
                    },
                    {
                        label: "再次入住：金藝術飯店 (Golden Art Hotel)",
                        time: "14:00 後 Check-in",
                        link: { type: "hotel", index: 2 }
                    },
                    {
                        label: "聖若瑟主教座堂、河內夜市巡禮",
                        time: "晚間",
                        address: "St. Joseph's Cathedral, Hanoi"
                    }
                ]
            },
            {
                date: "9/18（五）河內深度探索",
                stops: [
                    {
                        label: "連住不退房（金藝術飯店）",
                        time: "全日"
                    },
                    {
                        label: "河內文廟 (Temple of Literature) 參觀",
                        time: "09:30 - 11:30",
                        address: "58 Quoc Tu Giam, Van Mieu, Dong Da, Hanoi"
                    },
                    {
                        label: "西湖 (West Lake) 畔品嚐越式蛋咖啡 / 越式下午茶",
                        time: "14:00 - 16:00",
                        address: "Tay Ho, Hanoi"
                    },
                    {
                        label: "老城區傳統越式按摩放鬆與道地特色晚餐",
                        time: "17:30 - 20:30"
                    },
                    {
                        label: "金藝術飯店 (Golden Art Hotel)",
                        link: { type: "hotel", index: 2 }
                    }
                ]
            },
            {
                date: "9/19（六）河內 ✈️ 台北",
                stops: [
                    {
                        label: "金藝術飯店辦理退房",
                        time: "12:00 前 Check-out"
                    },
                    {
                        label: "市區最後採買伴手禮 / 享用午餐",
                        time: "12:00 - 14:00"
                    },
                    {
                        label: "出發前往河內內排機場 T2",
                        time: "14:30 預計出發"
                    },
                    {
                        label: "辦理登機手續、托運行李、出境審查",
                        time: "15:30 抵達機場"
                    },
                    {
                        label: "CI 794 航班（HAN 17:50 ➔ TPE 21:45）",
                        time: "17:50 - 21:45",
                        link: { type: "flight", index: 1 }
                    },
                    {
                        label: "平安返抵台北桃園國際機場 T1",
                        time: "21:45"
                    }
                ]
            }
        ],
        note: "💡 溫馨提醒：越南落地請備妥簽證/電子簽證(E-Visa)、護照及飯店訂房確認單。市區移動推薦使用 Grab App 叫車方便透明。"
    }
};
