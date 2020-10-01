package report;

import com.sun.javaws.progress.PreloaderPostEventListener;
import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;
import org.omg.PortableServer.REQUEST_PROCESSING_POLICY_ID;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

public class ReportGenerator {

    public static void main(String[] args) {
        String path = "";
        File reportOutPut = new File(path+"reportTaskTwo");

        List<String> jsonFiles = new ArrayList<>();
        jsonFiles.add(path+"report.json");

        Configuration configuration =  new Configuration(reportOutPut,"TRABAJO PRACTICO DOS");
        configuration.setBuildNumber("v1.0.0");
        configuration.addClassifications("SO","WINDOWS");
        configuration.addClassifications("OWNER","BRYAN AUGUSTO CRUZ CASTRO");
        configuration.addClassifications("BRANCH","CUCUMBER");
        configuration.addClassifications("TYPE REPORT","LOCAL");

        ReportBuilder reportBuilder = new ReportBuilder(jsonFiles,configuration);
        reportBuilder.generateReports();






    }

}
