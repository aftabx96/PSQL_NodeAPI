const express = require('express');
const cors = require('cors');
const pool = require('./db');
require('dotenv').config();


const app = express();
app.use(cors());
app.use(express.json());


app.get('/',async(req,res)=>{
    try {
        res.json('Welcome To HR API');
    } catch (err) {
        res.status(500).json({Error:err.message});
    }
});

app.get('/',(req,res)=>{
    try {
        res.json('Welcome To HR API');
    } catch (err) {
        res.status(500).json({Error:err.message});
    }
});


app.get('/country',async(req,res)=>{
    try {
        const result = await pool.query('select * from countries');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({Error:err.message});
    }
});

app.get('/TotalEmp',async(req,res)=>{
    try {
        const result = await pool.query('select count(*) as "TOTAL EMPLOYEES" from employees');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({Error:err.message});
    }
});


// Queries from /q50 to /q90
app.get('/q50', async (req, res) => {
    try {
        const result = await pool.query(`select jh.employee_id, jh.start_date, jh.end_date, jh.job_id, j.job_title,
        d.department_name, c.country_name from job_history jh 
        left join employees e on jh.employee_id = e.employee_id 
        left join jobs j on jh.job_id = j.job_id 
        left join departments d on e.department_id = d.department_id 
        left join locations l on d.location_id = l.location_id 
        left join countries c on l.country_id = c.country_id limit 5`);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/q51', async (req, res) => {
    try {
        const result = await pool.query(`select * from employees limit 5`);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/q52', async (req, res) => {
    try {
        const result = await pool.query(`select * from job_history limit 5`);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/q53', async (req, res) => {
    try {
        const result = await pool.query(`select * from departments limit 5`);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/q54', async (req, res) => {
    try {
        const result = await pool.query(`select * from jobs limit 5`);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/q55', async (req, res) => {
    try {
        const result = await pool.query(`select * from locations limit 5`);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/q56', async (req, res) => {
    try {
        const result = await pool.query(`select * from countries limit 5`);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/q57', async (req, res) => {
    try {
        const result = await pool.query(`select * from regions limit 5`);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/q58', async (req, res) => {
    try {
        const result = await pool.query(`select e.first_name, e.last_name, jh.start_date, jh.end_date, j.job_title from employees e 
        left join job_history jh on e.employee_id = jh.employee_id 
        left join jobs j on jh.job_id = j.job_id limit 5`);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/q59', async (req, res) => {
    try {
        const result = await pool.query(`select e.first_name, e.last_name, d.department_name, l.city, c.country_name from employees e 
        left join departments d on e.department_id = d.department_id 
        left join locations l on d.location_id = l.location_id 
        left join countries c on l.country_id = c.country_id limit 5`);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/q60', async (req, res) => {
    try {
        const result = await pool.query(`select e.first_name, e.last_name, d.department_name, j.job_title, l.city from employees e 
        left join departments d on e.department_id = d.department_id 
        left join jobs j on e.job_id = j.job_id 
        left join locations l on d.location_id = l.location_id limit 5`);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/q61', async (req, res) => {
    try {
        const result = await pool.query(`select e.first_name, e.last_name, d.department_name, j.job_title, c.country_name from employees e 
        left join departments d on e.department_id = d.department_id 
        left join jobs j on e.job_id = j.job_id 
        left join locations l on d.location_id = l.location_id 
        left join countries c on l.country_id = c.country_id limit 5`);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/q62', async (req, res) => {
    try {
        const result = await pool.query(`select e.first_name, e.last_name, jh.start_date, jh.end_date, j.job_title, d.department_name from employees e 
        left join job_history jh on e.employee_id = jh.employee_id 
        left join jobs j on jh.job_id = j.job_id 
        left join departments d on e.department_id = d.department_id limit 5`);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/q63', async (req, res) => {
    try {
        const result = await pool.query(`select e.first_name, e.last_name, d.department_name, j.job_title, l.city from employees e 
        left join departments d on e.department_id = d.department_id 
        left join jobs j on e.job_id = j.job_id 
        left join locations l on d.location_id = l.location_id limit 5`);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/q64', async (req, res) => {
    try {
        const result = await pool.query(`select e.first_name, e.last_name, d.department_name, l.city, c.country_name from employees e 
        left join departments d on e.department_id = d.department_id 
        left join locations l on d.location_id = l.location_id 
        left join countries c on l.country_id = c.country_id limit 5`);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/q65', async (req, res) => {
    try {
        const result = await pool.query(`select e.first_name, e.last_name, j.job_title, l.city from employees e 
        left join jobs j on e.job_id = j.job_id 
        left join departments d on e.department_id = d.department_id 
        left join locations l on d.location_id = l.location_id limit 5`);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/q66', async (req, res) => {
    try {
        const result = await pool.query(`select e.first_name, e.last_name, l.city, c.country_name from employees e 
        left join departments d on e.department_id = d.department_id 
        left join locations l on d.location_id = l.location_id 
        left join countries c on l.country_id = c.country_id limit 5`);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/q67', async (req, res) => {
    try {
        const result = await pool.query(`select e.first_name, e.last_name, j.job_title, l.city, c.country_name from employees e 
        left join jobs j on e.job_id = j.job_id 
        left join departments d on e.department_id = d.department_id 
        left join locations l on d.location_id = l.location_id 
        left join countries c on l.country_id = c.country_id limit 5`);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/q68', async (req, res) => {
    try {
        const result = await pool.query(`select e.first_name, e.last_name, j.job_title, d.department_name, l.city from employees e 
        left join jobs j on e.job_id = j.job_id 
        left join departments d on e.department_id = d.department_id 
        left join locations l on d.location_id = l.location_id limit 5`);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/q69', async (req, res) => {
    try {
        const result = await pool.query(`select e.first_name, e.last_name, d.department_name, j.job_title from employees e 
        left join departments d on e.department_id = d.department_id 
        left join jobs j on e.job_id = j.job_id limit 5`);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/q70', async (req, res) => {
    try {
        const result = await pool.query(`select * from employees e limit 5`);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/q71', async (req, res) => {
    try {
        const result = await pool.query(`select e.first_name, e.last_name, d.department_name, j.job_title, l.city from employees e 
        left join jobs j on e.job_id = j.job_id 
        left join departments d on e.department_id = d.department_id 
        left join locations l on d.location_id = l.location_id limit 5`);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/q72', async (req, res) => {
    try {
        const result = await pool.query(`select e.first_name, e.last_name, l.city, c.country_name from employees e 
        left join departments d on e.department_id = d.department_id 
        left join locations l on d.location_id = l.location_id 
        left join countries c on l.country_id = c.country_id limit 5`);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/q73', async (req, res) => {
    try {
        const result = await pool.query(`select e.first_name, e.last_name, j.job_title, l.city from employees e 
        left join jobs j on e.job_id = j.job_id 
        left join departments d on e.department_id = d.department_id 
        left join locations l on d.location_id = l.location_id limit 5`);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/q74', async (req, res) => {
    try {
        const result = await pool.query(`select e.first_name, e.last_name, j.job_title, l.city, c.country_name from employees e 
        left join jobs j on e.job_id = j.job_id 
        left join departments d on e.department_id = d.department_id 
        left join locations l on d.location_id = l.location_id 
        left join countries c on l.country_id = c.country_id limit 5`);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/q75', async (req, res) => {
    try {
        const result = await pool.query(`select e.first_name, e.last_name, j.job_title, d.department_name from employees e 
        left join jobs j on e.job_id = j.job_id 
        left join departments d on e.department_id = d.department_id limit 5`);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/q76', async (req, res) => {
    try {
        const result = await pool.query(`select e.first_name, e.last_name, j.job_title, l.city from employees e 
        left join jobs j on e.job_id = j.job_id 
        left join departments d on e.department_id = d.department_id 
        left join locations l on d.location_id = l.location_id limit 5`);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/q77', async (req, res) => {
    try {
        const result = await pool.query(`select e.first_name, e.last_name, j.job_title, d.department_name from employees e 
        left join jobs j on e.job_id = j.job_id 
        left join departments d on e.department_id = d.department_id limit 5`);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/q78', async (req, res) => {
    try {
        const result = await pool.query(`select e.first_name, e.last_name, l.city, c.country_name from employees e 
        left join departments d on e.department_id = d.department_id 
        left join locations l on d.location_id = l.location_id 
        left join countries c on l.country_id = c.country_id limit 5`);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/q79', async (req, res) => {
    try {
        const result = await pool.query(`select e.first_name, e.last_name, j.job_title, l.city from employees e 
        left join jobs j on e.job_id = j.job_id 
        left join departments d on e.department_id = d.department_id 
        left join locations l on d.location_id = l.location_id limit 5`);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/q80', async (req, res) => {
    try {
        const result = await pool.query(`select e.first_name, e.last_name, j.job_title, d.department_name from employees e 
        left join jobs j on e.job_id = j.job_id 
        left join departments d on e.department_id = d.department_id limit 5`);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/q81', async (req, res) => {
    try {
        const result = await pool.query(`select e.first_name, e.last_name, j.job_title, d.department_name from employees e 
        left join jobs j on e.job_id = j.job_id 
        left join departments d on e.department_id = d.department_id limit 5`);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/q82', async (req, res) => {
    try {
        const result = await pool.query(`select e.first_name, e.last_name, l.city, c.country_name from employees e 
        left join departments d on e.department_id = d.department_id 
        left join locations l on d.location_id = l.location_id 
        left join countries c on l.country_id = c.country_id limit 5`);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/q83', async (req, res) => {
    try {
        const result = await pool.query(`select e.first_name, e.last_name, j.job_title, l.city, c.country_name from employees e 
        left join jobs j on e.job_id = j.job_id 
        left join departments d on e.department_id = d.department_id 
        left join locations l on d.location_id = l.location_id 
        left join countries c on l.country_id = c.country_id limit 5`);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/q84', async (req, res) => {
    try {
        const result = await pool.query(`select e.first_name, e.last_name, j.job_title, l.city from employees e 
        left join jobs j on e.job_id = j.job_id 
        left join departments d on e.department_id = d.department_id 
        left join locations l on d.location_id = l.location_id limit 5`);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/q85', async (req, res) => {
    try {
        const result = await pool.query(`select e.first_name, e.last_name, j.job_title, l.city, c.country_name from employees e 
        left join jobs j on e.job_id = j.job_id 
        left join departments d on e.department_id = d.department_id 
        left join locations l on d.location_id = l.location_id 
        left join countries c on l.country_id = c.country_id limit 5`);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/q86', async (req, res) => {
    try {
        const result = await pool.query(`select e.first_name, e.last_name, j.job_title, d.department_name from employees e 
        left join jobs j on e.job_id = j.job_id 
        left join departments d on e.department_id = d.department_id limit 5`);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/q87', async (req, res) => {
    try {
        const result = await pool.query(`select e.first_name, e.last_name, j.job_title, l.city from employees e 
        left join jobs j on e.job_id = j.job_id 
        left join departments d on e.department_id = d.department_id 
        left join locations l on d.location_id = l.location_id limit 5`);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/q88', async (req, res) => {
    try {
        const result = await pool.query(`select e.first_name, e.last_name, j.job_title, l.city, c.country_name from employees e 
        left join jobs j on e.job_id = j.job_id 
        left join departments d on e.department_id = d.department_id 
        left join locations l on d.location_id = l.location_id 
        left join countries c on l.country_id = c.country_id limit 5`);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/q89', async (req, res) => {
    try {
        const result = await pool.query(`select e.first_name, e.last_name, l.city, c.country_name from employees e 
        left join departments d on e.department_id = d.department_id 
        left join locations l on d.location_id = l.location_id 
        left join countries c on l.country_id = c.country_id limit 5`);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/q90', async (req, res) => {
    try {
        const result = await pool.query(`select e.first_name, e.last_name, j.job_title, l.city from employees e 
        left join jobs j on e.job_id = j.job_id 
        left join departments d on e.department_id = d.department_id 
        left join locations l on d.location_id = l.location_id limit 5`);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});


const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Connected Successfully ... On PORT ${PORT}`)
});