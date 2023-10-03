import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from './api/axios';
const Calendar = () => {
    const navigate = useNavigate();
    
    
    const [calendarText, setCalendarText] = useState('');
    const [inputValue, setInputValue] = useState('');
    
    const fetchCalendarText = async () => {
        let query = new URLSearchParams(window.location.search).get('year');
        if(!query){
            query = 2023;
        }
        try {
            const response = await axios.get(`/calendar?year=${query}`, { responseType: 'text' });
            setCalendarText(response?.data || '');
            console.log(calendarText);
        } catch (error) {
            console.error(`Error fetching calendar text: ${error.message}`);
        }
    };

    useEffect(() => {
        fetchCalendarText();
        // eslint-disable-next-line
    },[]);


    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            if (!isNaN(inputValue)) {    
                navigate("?year="+inputValue);
                fetchCalendarText();
            } else {
                setInputValue('');
            }
        }
    };

    return (
        <main >
            <h2>Calendar</h2>
            <p style={{ marginTop: "1rem" }}>
                { calendarText ? (
                    <section>
                        <input 
                            class="tennam"
                            type="text" 
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={handleKeyPress}
                        />
                        <span dangerouslySetInnerHTML={{ __html: calendarText }} />
                    </section>
                ) : (
                    <section>
                        <p>Đang lấy dữ liệu</p>
                    </section>
                )}
            </p>
        </main>
    );
}

export default Calendar;
