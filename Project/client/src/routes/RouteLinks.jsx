import React from "react";
import { Link } from "react-router-dom";

export const Adduser = () => {
  return <Link to="/" />;
};

export const Login = () => {
  return <Link to="/login" />;
};

export const Home = () => {
  return <Link to="/home" />;
};

export const Inventory = () => {
  return <Link to="/inventory" />;
};

export const Project = () => {
  return <Link to="/project" />;
};

export const Client = () => {
  return <Link to="/client" />;
};

export const Tender = () => {
  return <Link to="/tender" />;
};

export const Finance = () => {
  return <Link to="/finance" />;
};

export const Employees = () => {
  return <Link to="/employees" />;
};

export const Packages = () => {
  return <Link to="/packages" />;
};

export const Clients = () => {
  return <Link to="/clients" />;
};

export const Rents = () => {
  return <Link to="/rents" />;
};

export const Test = () => {
  return <Link to="/test" />;
};

export const CustomeLink = ({ path, Name }) => {
  <Link to={path} className="link">
    {Name}{" "}
  </Link>;
};

export default {
  Adduser,
  Login,
  Home,
  Test,
  Inventory,
  Project,
  Clients,
  Finance,
  Tender,
  Packages,
  Employees,
  Rents,
};
