using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.IO;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Hosting;
using System.Web.Mvc;
using Microsoft.AspNet.Identity;

namespace SafeWorkMel.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";

            return View();
        }
        public ActionResult Weather()
        {
            ViewBag.Title = "Weather";

            return View();
        }

        public ActionResult NearbyRest()
        {
            ViewBag.Title = "Nearby";

            return View();
        }

        public ActionResult Accessibility()
        {
            ViewBag.Title = "Accessibility";

            return View();
        }

        public ActionResult NearbyRestv2()
        {
            ViewBag.Title = "NearbyRestv2";

            return View();
        }
    }
}
