'use client';

import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useState } from 'react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

// Data matching the waste management dashboard structure with Vietnam regions and cities
const wasteByRegion = [
  { region: 'North', collected: 450 },
  { region: 'Central', collected: 320 },
  { region: 'South', collected: 280 },
];

const wasteByCity = [
  { city: 'Hanoi', collected: 380, region: 'North' },
  { city: 'Ho Chi Minh', collected: 520, region: 'South' },
  { city: 'Da Nang', collected: 290, region: 'Central' },
  { city: 'Others', collected: 240, region: 'Mixed' },
];

const wasteOverTime = [
  { month: 'Jan', collected: 2100 },
  { month: 'Feb', collected: 2300 },
  { month: 'Mar', collected: 2500 },
  { month: 'Apr', collected: 2800 },
  { month: 'May', collected: 2600 },
  { month: 'Jun', collected: 2400 },
];

const disposalMethods = [
  { method: 'Recycling', value: 72, color: '#16a34a' },
  { method: 'Landfill', value: 28, color: '#6b7280' },
];

const wasteBySector = [
  { sector: 'Residential', collected: 1800 },
  { sector: 'Commercial', collected: 2200 },
  { sector: 'Industrial', collected: 1600 },
];

const wasteDetails = [
  { region: 'North', collected: 450, diverted: 380, disposal: 70 },
  { region: 'Central', collected: 320, diverted: 280, disposal: 40 },
  { region: 'South', collected: 280, diverted: 240, disposal: 40 },
];

export default function WasteSection() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Mobile Filter Toggle Button */}
      <div className="xl:hidden mb-4">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="flex items-center space-x-2 px-4 py-2 bg-eco-green-600 text-white rounded-lg hover:bg-eco-green-700 transition-colors"
        >
          <Bars3Icon className="w-5 h-5" />
          <span>Filters</span>
        </button>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 xl:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Filter Sidebar - Mobile Overlay & Desktop Static */}
      <motion.div
        initial={false}
        animate={{
          x: sidebarOpen ? 0 : '-100%',
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed xl:hidden top-0 left-0 z-50 w-80 bg-white rounded-r-xl shadow-xl p-6 h-full overflow-y-auto`}
      >
        {/* Mobile Close Button */}
        <div className="flex justify-between items-center mb-6 xl:hidden">
          <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <XMarkIcon className="w-5 h-5 text-gray-600" />
          </button>
        </div>
        
        {/* Waste Type Filter */}
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-700 mb-3">Waste Type</h4>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" defaultChecked className="rounded border-gray-300 text-eco-green-600 focus:ring-eco-green-500" />
              <span className="text-sm text-gray-600">All</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded border-gray-300 text-eco-green-600 focus:ring-eco-green-500" />
              <span className="text-sm text-gray-600">Organic</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded border-gray-300 text-eco-green-600 focus:ring-eco-green-500" />
              <span className="text-sm text-gray-600">Inorganic</span>
            </label>
          </div>
        </div>

        {/* Region Filter */}
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-700 mb-3">Region</h4>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" defaultChecked className="rounded border-gray-300 text-eco-green-600 focus:ring-eco-green-500" />
              <span className="text-sm text-gray-600">All</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded border-gray-300 text-eco-green-600 focus:ring-eco-green-500" />
              <span className="text-sm text-gray-600">North</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded border-gray-300 text-eco-green-600 focus:ring-eco-green-500" />
              <span className="text-sm text-gray-600">Central</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded border-gray-300 text-eco-green-600 focus:ring-eco-green-500" />
              <span className="text-sm text-gray-600">South</span>
            </label>
          </div>
        </div>

        {/* City Filter */}
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-700 mb-3">City</h4>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" defaultChecked className="rounded border-gray-300 text-eco-green-600 focus:ring-eco-green-500" />
              <span className="text-sm text-gray-600">All</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded border-gray-300 text-eco-green-600 focus:ring-eco-green-500" />
              <span className="text-sm text-gray-600">Hanoi</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded border-gray-300 text-eco-green-600 focus:ring-eco-green-500" />
              <span className="text-sm text-gray-600">Ho Chi Minh</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded border-gray-300 text-eco-green-600 focus:ring-eco-green-500" />
              <span className="text-sm text-gray-600">Da Nang</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded border-gray-300 text-eco-green-600 focus:ring-eco-green-500" />
              <span className="text-sm text-gray-600">Others</span>
            </label>
          </div>
        </div>

        {/* Disposal Method Filter */}
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-700 mb-3">Disposal Method</h4>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" defaultChecked className="rounded border-gray-300 text-eco-green-600 focus:ring-eco-green-500" />
              <span className="text-sm text-gray-600">All</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded border-gray-300 text-eco-green-600 focus:ring-eco-green-500" />
              <span className="text-sm text-gray-600">Recycling</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded border-gray-300 text-eco-green-600 focus:ring-eco-green-500" />
              <span className="text-sm text-gray-600">Landfill</span>
            </label>
          </div>
        </div>

        {/* Time Range Filter */}
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-700 mb-3">Time Range</h4>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" defaultChecked className="rounded border-gray-300 text-eco-green-600 focus:ring-eco-green-500" />
              <span className="text-sm text-gray-600">All</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded border-gray-300 text-eco-green-600 focus:ring-eco-green-500" />
              <span className="text-sm text-gray-600">Last 6 Months</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded border-gray-300 text-eco-green-600 focus:ring-eco-green-500" />
              <span className="text-sm text-gray-600">Last 6 Days</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded border-gray-300 text-eco-green-600 focus:ring-eco-green-500" />
              <span className="text-sm text-gray-600">Last 6 Weeks</span>
            </label>
          </div>
        </div>
      </motion.div>

      {/* Desktop Layout */}
      <div className="hidden xl:flex flex-row gap-6 w-full">
        {/* Desktop Filter Sidebar */}
        <div className="w-64 bg-white rounded-xl shadow-md p-6 h-fit flex-shrink-0">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Filters</h3>
          
          {/* Waste Type Filter */}
          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-700 mb-3">Waste Type</h4>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input type="checkbox" defaultChecked className="rounded border-gray-300 text-eco-green-600 focus:ring-eco-green-500" />
                <span className="text-sm text-gray-600">All</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-gray-300 text-eco-green-600 focus:ring-eco-green-500" />
                <span className="text-sm text-gray-600">Organic</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-gray-300 text-eco-green-600 focus:ring-eco-green-500" />
                <span className="text-sm text-gray-600">Inorganic</span>
              </label>
            </div>
          </div>

          {/* Region Filter */}
          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-700 mb-3">Region</h4>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input type="checkbox" defaultChecked className="rounded border-gray-300 text-eco-green-600 focus:ring-eco-green-500" />
                <span className="text-sm text-gray-600">All</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-gray-300 text-eco-green-600 focus:ring-eco-green-500" />
                <span className="text-sm text-gray-600">North</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-gray-300 text-eco-green-600 focus:ring-eco-green-500" />
                <span className="text-sm text-gray-600">Central</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-gray-300 text-eco-green-600 focus:ring-eco-green-500" />
                <span className="text-sm text-gray-600">South</span>
              </label>
            </div>
          </div>

          {/* City Filter */}
          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-700 mb-3">City</h4>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input type="checkbox" defaultChecked className="rounded border-gray-300 text-eco-green-600 focus:ring-eco-green-500" />
                <span className="text-sm text-gray-600">All</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-gray-300 text-eco-green-600 focus:ring-eco-green-500" />
                <span className="text-sm text-gray-600">Hanoi</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-gray-300 text-eco-green-600 focus:ring-eco-green-500" />
                <span className="text-sm text-gray-600">Ho Chi Minh</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-gray-300 text-eco-green-600 focus:ring-eco-green-500" />
                <span className="text-sm text-gray-600">Da Nang</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-gray-300 text-eco-green-600 focus:ring-eco-green-500" />
                <span className="text-sm text-gray-600">Others</span>
              </label>
            </div>
          </div>

          {/* Disposal Method Filter */}
          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-700 mb-3">Disposal Method</h4>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input type="checkbox" defaultChecked className="rounded border-gray-300 text-eco-green-600 focus:ring-eco-green-500" />
                <span className="text-sm text-gray-600">All</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-gray-300 text-eco-green-600 focus:ring-eco-green-500" />
                <span className="text-sm text-gray-600">Recycling</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-gray-300 text-eco-green-600 focus:ring-eco-green-500" />
                <span className="text-sm text-gray-600">Landfill</span>
              </label>
            </div>
          </div>

          {/* Time Range Filter */}
          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-700 mb-3">Time Range</h4>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input type="checkbox" defaultChecked className="rounded border-gray-300 text-eco-green-600 focus:ring-eco-green-500" />
                <span className="text-sm text-gray-600">All</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-gray-300 text-eco-green-600 focus:ring-eco-green-500" />
                <span className="text-sm text-gray-600">Last 6 Months</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-gray-300 text-eco-green-600 focus:ring-eco-green-500" />
                <span className="text-sm text-gray-600">Last 6 Weeks</span>
              </label>
            </div>
          </div>
        </div>

        {/* Main Content Area - Desktop */}
        <div className="flex-1 space-y-4 md:space-y-6 min-w-0 w-full px-2 md:px-0">
          {/* Top Row */}
          <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4 md:gap-6">
            {/* Total Food Waste Collected */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-md p-4 md:p-6"
            >
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4">Total Food Waste Collected (tons)</h3>
              <div className="space-y-3 md:space-y-4">
                <div>
                  <p className="text-xs md:text-sm text-gray-600">Current</p>
                  <p className="text-2xl md:text-3xl font-bold text-eco-green-600">
                    <CountUp end={2.5} duration={2} decimals={1} />k
                  </p>
                </div>
                <div>
                  <p className="text-xs md:text-sm text-gray-600">Previous</p>
                  <p className="text-lg md:text-2xl font-semibold text-gray-800">2.2k</p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs md:text-sm font-semibold">
                    +12%
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Food Waste Collected by Region */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-xl shadow-md p-4 md:p-6"
            >
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4">Food Waste Collected by Region</h3>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={wasteByRegion} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis type="number" stroke="#6b7280" fontSize={12} />
                  <YAxis 
                    dataKey="region" 
                    type="category" 
                    stroke="#6b7280"
                    width={50}
                    fontSize={12}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'white',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                    }}
                  />
                  <Bar 
                    dataKey="collected" 
                    fill="#16a34a"
                    radius={[0, 4, 4, 0]}
                    animationDuration={1500}
                  />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Food Waste Collected by City */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-white rounded-xl shadow-md p-4 md:p-6"
            >
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4">Food Waste Collected by City</h3>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={wasteByCity} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis type="number" stroke="#6b7280" fontSize={12} />
                  <YAxis 
                    dataKey="city" 
                    type="category" 
                    stroke="#6b7280"
                    width={80}
                    fontSize={12}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'white',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                    }}
                  />
                  <Bar 
                    dataKey="collected" 
                    fill="#3b82f6"
                    radius={[0, 4, 4, 0]}
                    animationDuration={1500}
                  />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Total Waste Collected Over Time */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl shadow-md p-4 md:p-6"
            >
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4">Total Waste Collected Over Time</h3>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={wasteOverTime}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" stroke="#6b7280" fontSize={12} />
                  <YAxis stroke="#6b7280" fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'white',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="collected"
                    stroke="#16a34a"
                    strokeWidth={3}
                    dot={{ fill: '#16a34a', r: 4 }}
                    animationDuration={1500}
                  />
                </LineChart>
              </ResponsiveContainer>
            </motion.div>
          </div>

          {/* Middle Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-6">
            {/* Total Food Waste Diverted */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-xl shadow-md p-4 md:p-6"
            >
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4">Total Food Waste Diverted (tons)</h3>
              <div className="space-y-3 md:space-y-4">
                <div>
                  <p className="text-xs md:text-sm text-gray-600">Current</p>
                  <p className="text-2xl md:text-3xl font-bold text-eco-blue-600">
                    <CountUp end={1.8} duration={2} decimals={1} />k
                  </p>
                </div>
                <div>
                  <p className="text-xs md:text-sm text-gray-600">Previous</p>
                  <p className="text-lg md:text-2xl font-semibold text-gray-800">1.2k</p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs md:text-sm font-semibold">
                    +25%
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Landfill Usage */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-xl shadow-md p-4 md:p-6"
            >
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4">Landfill Usage (tons)</h3>
              <div className="space-y-3 md:space-y-4">
                <div>
                  <p className="text-xs md:text-sm text-gray-600">Current</p>
                  <p className="text-2xl md:text-3xl font-bold text-gray-800">700</p>
                </div>
                <div>
                  <p className="text-xs md:text-sm text-gray-600">Previous</p>
                  <p className="text-lg md:text-2xl font-semibold text-gray-800">750</p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="px-2 py-1 bg-amber-100 text-amber-700 rounded text-xs md:text-sm font-semibold">
                    -5%
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Waste Disposal Methods */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-xl shadow-md p-4 md:p-6"
            >
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4">Waste Disposal Methods</h3>
              <ResponsiveContainer width="100%" height={180}>
                <PieChart>
                  <Pie
                    data={disposalMethods}
                    cx="50%"
                    cy="50%"
                    outerRadius={60}
                    fill="#8884d8"
                    dataKey="value"
                    animationDuration={1500}
                  >
                    {disposalMethods.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'white',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-4 space-y-2">
                {disposalMethods.map((item) => (
                  <div key={item.method} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-xs md:text-sm text-gray-600">{item.method}</span>
                    </div>
                    <span className="text-xs md:text-sm font-semibold text-gray-800">{item.value}%</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Waste Collection by Sector */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-xl shadow-md p-4 md:p-6"
            >
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4">Waste Collection by Sector</h3>
              <ResponsiveContainer width="100%" height={180}>
                <BarChart data={wasteBySector} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis type="number" stroke="#6b7280" fontSize={12} />
                  <YAxis 
                    dataKey="sector" 
                    type="category" 
                    stroke="#6b7280"
                    width={70}
                    fontSize={12}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'white',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                    }}
                  />
                  <Bar 
                    dataKey="collected" 
                    fill="#22c55e"
                    radius={[0, 4, 4, 0]}
                    animationDuration={1500}
                  />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>
          </div>

          {/* Bottom Section - Waste Collection Details Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-white rounded-xl shadow-md p-4 md:p-6"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4 md:mb-6">Waste Collection Details</h3>

            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Region</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Collected (tons)</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Diverted (tons)</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Disposal (tons)</th>
                  </tr>
                </thead>
                <tbody>
                  {wasteDetails.map((item, index) => (
                    <motion.tr
                      key={item.region}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="border-b border-gray-100 hover:bg-gray-50"
                    >
                      <td className="py-3 px-4 font-medium text-gray-900">{item.region}</td>
                      <td className="py-3 px-4 text-gray-700">{item.collected}</td>
                      <td className="py-3 px-4 text-gray-700">{item.diverted}</td>
                      <td className="py-3 px-4 text-gray-700">{item.disposal}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-4">
              {wasteDetails.map((item, index) => (
                <motion.div
                  key={item.region}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 rounded-lg p-4 border border-gray-200"
                >
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold text-gray-900">{item.region}</h4>
                    <span className="text-sm text-gray-500">Region</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500 mb-1">Collected</p>
                      <p className="font-semibold text-gray-900">{item.collected} tons</p>
                    </div>
                    <div>
                      <p className="text-gray-500 mb-1">Diverted</p>
                      <p className="font-semibold text-eco-green-600">{item.diverted} tons</p>
                    </div>
                    <div>
                      <p className="text-gray-500 mb-1">Disposal</p>
                      <p className="font-semibold text-gray-800">{item.disposal} tons</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile Content - Full Width */}
      <div className="xl:hidden w-full space-y-4 md:space-y-6 px-2 md:px-0">
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Total Food Waste Collected */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-md p-4 md:p-6"
          >
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4">Total Food Waste Collected (tons)</h3>
            <div className="space-y-3 md:space-y-4">
              <div>
                <p className="text-xs md:text-sm text-gray-600">Current</p>
                <p className="text-2xl md:text-3xl font-bold text-eco-green-600">
                  <CountUp end={2.5} duration={2} decimals={1} />k
                </p>
              </div>
              <div>
                <p className="text-xs md:text-sm text-gray-600">Previous</p>
                <p className="text-lg md:text-2xl font-semibold text-gray-800">2.2k</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs md:text-sm font-semibold">
                  +12%
                </div>
              </div>
            </div>
          </motion.div>

          {/* Food Waste Collected by Region */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-xl shadow-md p-4 md:p-6"
          >
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4">Food Waste Collected by Region</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={wasteByRegion} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis type="number" stroke="#6b7280" fontSize={12} />
                <YAxis 
                  dataKey="region" 
                  type="category" 
                  stroke="#6b7280"
                  width={50}
                  fontSize={12}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                  }}
                />
                <Bar 
                  dataKey="collected" 
                  fill="#16a34a"
                  radius={[0, 4, 4, 0]}
                  animationDuration={1500}
                />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Continue with other cards... */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Total Waste Collected Over Time */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl shadow-md p-4 md:p-6"
          >
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4">Total Waste Collected Over Time</h3>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={wasteOverTime}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#6b7280" fontSize={12} />
                <YAxis stroke="#6b7280" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="collected"
                  stroke="#16a34a"
                  strokeWidth={3}
                  dot={{ fill: '#16a34a', r: 4 }}
                  animationDuration={1500}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Total Food Waste Diverted */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-xl shadow-md p-4 md:p-6"
          >
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4">Total Food Waste Diverted (tons)</h3>
            <div className="space-y-3 md:space-y-4">
              <div>
                <p className="text-xs md:text-sm text-gray-600">Current</p>
                <p className="text-2xl md:text-3xl font-bold text-eco-blue-600">
                  <CountUp end={1.8} duration={2} decimals={1} />k
                </p>
              </div>
              <div>
                <p className="text-xs md:text-sm text-gray-600">Previous</p>
                <p className="text-lg md:text-2xl font-semibold text-gray-800">1.2k</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs md:text-sm font-semibold">
                  +25%
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Middle Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {/* Landfill Usage */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-xl shadow-md p-4 md:p-6"
          >
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4">Landfill Usage (tons)</h3>
            <div className="space-y-3 md:space-y-4">
              <div>
                <p className="text-xs md:text-sm text-gray-600">Current</p>
                <p className="text-2xl md:text-3xl font-bold text-gray-800">700</p>
              </div>
              <div>
                <p className="text-xs md:text-sm text-gray-600">Previous</p>
                <p className="text-lg md:text-2xl font-semibold text-gray-800">750</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="px-2 py-1 bg-amber-100 text-amber-700 rounded text-xs md:text-sm font-semibold">
                  -5%
                </div>
              </div>
            </div>
          </motion.div>

          {/* Waste Disposal Methods */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white rounded-xl shadow-md p-4 md:p-6"
          >
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4">Waste Disposal Methods</h3>
            <ResponsiveContainer width="100%" height={180}>
              <PieChart>
                <Pie
                  data={disposalMethods}
                  cx="50%"
                  cy="50%"
                  outerRadius={60}
                  fill="#8884d8"
                  dataKey="value"
                  animationDuration={1500}
                >
                  {disposalMethods.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {disposalMethods.map((item) => (
                <div key={item.method} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-xs md:text-sm text-gray-600">{item.method}</span>
                  </div>
                  <span className="text-xs md:text-sm font-semibold text-gray-800">{item.value}%</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Waste Collection by Sector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white rounded-xl shadow-md p-4 md:p-6 sm:col-span-2"
          >
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4">Waste Collection by Sector</h3>
            <ResponsiveContainer width="100%" height={180}>
              <BarChart data={wasteBySector} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis type="number" stroke="#6b7280" fontSize={12} />
                <YAxis 
                  dataKey="sector" 
                  type="category" 
                  stroke="#6b7280"
                  width={70}
                  fontSize={12}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                  }}
                />
                <Bar 
                  dataKey="collected" 
                  fill="#22c55e"
                  radius={[0, 4, 4, 0]}
                  animationDuration={1500}
                />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Bottom Section - Waste Collection Details Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-white rounded-xl shadow-md p-4 md:p-6"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4 md:mb-6">Waste Collection Details</h3>

          {/* Mobile Cards */}
          <div className="space-y-4">
            {wasteDetails.map((item, index) => (
              <motion.div
                key={item.region}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-4 border border-gray-200"
              >
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-semibold text-gray-900">{item.region}</h4>
                  <span className="text-sm text-gray-500">Region</span>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500 mb-1">Collected</p>
                    <p className="font-semibold text-gray-900">{item.collected} tons</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Diverted</p>
                    <p className="font-semibold text-eco-green-600">{item.diverted} tons</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Disposal</p>
                    <p className="font-semibold text-gray-800">{item.disposal} tons</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
