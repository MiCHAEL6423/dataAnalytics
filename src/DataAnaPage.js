
import './DataAnaPage.css';
import ProgressBar from "@ramonak/react-progress-bar";
import { PieChart } from 'react-minimal-pie-chart';
<ProgressBar completed={50} bgColor="grey" animateOnRender={true} />

const DataAnaPage = () => {


    return (
        <div className='parent'>
            <div className='pnl_NavBar'></div>
            <div className='pnl_MemberBar'>
                <input className='searchBar' type='text' placeholder='Search..'/>
                <h1 className='project1'>Making a Chair</h1>
                <h1 className='project2'>Building a Door</h1>
            </div>
            <div className='pnl_Title'>
                <h1 className='txt_DataAnalytics'>Data Analytics</h1>
            </div>

            <div className='pnl_projectD'>
                <div className='divProjectD'>
                    <h1 className='txt_ProjectD'>Project Description</h1>
                    <h2 className='totalTasks'>Number of Tasks: 12</h2>
                    <h2 className='completedTasks'>Completed Tasks: 7</h2>
                    <ProgressBar completed = {58.3} bgColor = "#3AAEA9" animateOnRender = {true} className='pg1' />
                </div>
            </div>

            <div className='pnl_LOT'>
                <div className='divLOT'>
                    <h1 className='txtLOT'>&nbsp;List of Tasks</h1>
                    <h2 className='labels'> &nbsp;&nbsp;User &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Task Description&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Task Priority&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Completed</h2>
                    <h2></h2>
                    <h2> &nbsp;&nbsp;User 1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;demoDescription&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;High&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Complete</h2>
                    <h2> &nbsp;&nbsp;User 1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;demoDescription&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;High&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Complete</h2>
                    <h2> &nbsp;&nbsp;User 1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;demoDescription&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;High&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Complete</h2>
                    <h2> &nbsp;&nbsp;User 1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;demoDescription&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;High&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Complete</h2>
                    <h2> &nbsp;&nbsp;User 1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;demoDescription&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;High&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Complete</h2>
                    <h2> &nbsp;&nbsp;User 1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;demoDescription&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;High&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Complete</h2>
                </div>
            </div>

            <div className='pnl_Allocation'>
                <div className='divAllocation'>
                    <h1 className='txt_Allocation'>Allocation of Tasks</h1>
                    <PieChart className="pieChart"
                        data={[
                        { value: 23, color: '#2B7A77' },
                        { value: 45, color: '#3AAEA9' },
                        {value: 15, color: '#FFFFFF'},
                        {value: 15, color: '#D1FFBD'}
                        ]}
                        lineWidth={30}
                        startAngle={-90}
                        label={({ dataEntry }) => `${Math.round(dataEntry.percentage)}%`}
                        labelPosition={60}
                        labelStyle={{
                            fontSize: '5px',
                            fontWeight: 'bold',
                            fill: '#FFFFFF',
                        }}
                        onMouseOver={(_, index) => {
                            // Handle mouse over event here
                            console.log(`Hovered over segment ${index}`);
                        }}
                    />

                </div>
            </div>

            <div className='pnlAOI'>
                <div className='divAOI'>
                    <h1 className='txt_Allocation'>Areas of Improvement</h1>
                </div>
            </div>
            <div className='pnl_Requirements'>
                <div className='divTrainingRequirements'>
                    <h1 className='txt_TR'>Training Required</h1>
                    <button className='btn_TR'>Software Development</button>
                </div>
                <div className='divResourceRequirements'>
                    <h1 className='txt_RR'>Resources Required</h1>
                    <button className='btn_RR'>Printer Paper</button>
                </div>
            </div>
            
        </div>
    );
}

export default DataAnaPage;