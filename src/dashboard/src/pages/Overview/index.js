import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';

const TimeSeriesChart = () => {
    const [timeInterval, setTimeInterval] = useState('weekly'); // Beispiel für einen Zustand

    // Daten und Optionen für das Diagramm, basierend auf timeInterval
    const data = {
        // Datenstruktur hier definieren, abhängig von `timeInterval`
    };

    // Funktion zum Aktualisieren des Zeitintervalls
    const handleIntervalChange = (event) => {
        setTimeInterval(event.target.value);
        // Hier sollten Sie auch die Logik zum Laden/Filtern der Daten einfügen
    };

    return (
        <div>
            <select onChange={handleIntervalChange}>
                <option value="weekly">Wöchentlich</option>
                <option value="monthly">Monatlich</option>
                <option value="yearly">Jährlich</option>
            </select>
            <Line data={data} />
        </div>
    );
};

export default TimeSeriesChart;
