//Additional Namespaces to be added

using System.Data;
using System.Reflection;


//Calling the function in Pageload


protected void Page_Load(object sender, EventArgs e)
{
  DataTable dt = new DataTable();
  Mktdetails obj = new Mktdetails();
  dt = objToDataTable(obj);
}


//creating the class with objects

public class Mktdetails
{
   public string Name { get; set; }
   public string Place { get; set; }
   public string Age { get; set; }
   public string Country { get; set; }
   public string Mobile { get; set; }
   public string Email { get; set; }
}

//converting the objects to DataTable

private DataTable objToDataTable(Mktdetails obj)
{
   DataTable dt = new DataTable();
   Mktdetails objmkt = new Mktdetails();
   dt.Columns.Add("Column_Name");
   foreach (PropertyInfo info in typeof(Mktdetails).GetProperties())
    {
       dt.Rows.Add(info.Name);
    }
   dt.AcceptChanges();
   return dt;
 }